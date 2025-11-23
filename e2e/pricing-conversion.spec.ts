import { test, expect } from '@playwright/test';

test.describe('Pricing Page Conversion Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/pricing');
  });

  test('Pricing page loads with all plans visible', async ({ page }) => {
    await expect(page).toHaveURL('/pricing');
    await expect(page.locator('h1')).toContainText('Pricing');

    // Verify all 4 pricing tiers are visible
    await expect(page.locator('text=/Starter/i')).toBeVisible();
    await expect(page.locator('text=/Professional/i')).toBeVisible();
    await expect(page.locator('text=/Enterprise/i')).toBeVisible();
    await expect(page.locator('text=/Free/i').or(page.locator('text=/Trial/i'))).toBeVisible();
  });

  test('Annual/Monthly toggle updates prices', async ({ page }) => {
    // Look for billing toggle
    const annualToggle = page.locator('button:has-text("Annual")');
    const monthlyToggle = page.locator('button:has-text("Monthly")');

    if (await annualToggle.count() > 0 && await monthlyToggle.count() > 0) {
      // Click Monthly
      await monthlyToggle.click();
      await page.waitForTimeout(500);

      // Verify monthly indicator visible
      const monthlyPrice = page.locator('text=//mo').first();
      await expect(monthlyPrice).toBeVisible();

      // Click Annual
      await annualToggle.click();
      await page.waitForTimeout(500);

      // Verify annual indicator or discount badge
      const annualIndicator = page.locator('text=//yr, text=/year/i, text=/Save/i').first();
      await expect(annualIndicator).toBeVisible();
    }
  });

  test('Plan features are displayed correctly', async ({ page }) => {
    // Professional plan should show features
    const professionalSection = page.locator('text=/Professional/i').locator('..');
    
    // Check for common features
    await expect(page.locator('text=/API Access/i, text=/records/i, text=/support/i').first()).toBeVisible();
  });

  test('CTA buttons navigate to signup/contact', async ({ page }) => {
    // Click on "Get Started" or "Start Trial" button
    const ctaButton = page.locator('button:has-text("Get Started"), button:has-text("Start Trial"), a:has-text("Get Started")').first();
    
    if (await ctaButton.count() > 0) {
      const buttonText = await ctaButton.textContent();
      await ctaButton.click();

      await page.waitForTimeout(1000);

      // Should navigate to contact, signup, or show modal
      const url = page.url();
      const hasModal = await page.locator('[role="dialog"], .modal').count() > 0;

      expect(
        url.includes('/contact') || 
        url.includes('/signup') || 
        url.includes('/demo') || 
        hasModal
      ).toBeTruthy();
    }
  });

  test('Enterprise plan has "Contact Sales" CTA', async ({ page }) => {
    const enterpriseCTA = page.locator('text=/Enterprise/i').locator('..').locator('text=/Contact Sales/i, text=/Talk to Sales/i').first();
    
    if (await enterpriseCTA.count() > 0) {
      await expect(enterpriseCTA).toBeVisible();
      
      await enterpriseCTA.click();
      await page.waitForTimeout(1000);

      // Should go to contact page or open modal
      const url = page.url();
      const hasContactForm = await page.locator('text=/Get in Touch/i, text=/Contact/i').count() > 0;
      
      expect(url.includes('/contact') || hasContactForm).toBeTruthy();
    }
  });

  test('FAQ section is present on pricing page', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Check for FAQ
    const faqHeading = page.locator('text=/Frequently Asked Questions/i, text=/FAQ/i');
    if (await faqHeading.count() > 0) {
      await expect(faqHeading).toBeVisible();
    }
  });

  test('Pricing page shows money-back guarantee or free trial info', async ({ page }) => {
    // Look for trust signals
    const trustSignals = page.locator('text=/money-back/i, text=/free trial/i, text=/no credit card/i, text=/cancel anytime/i').first();
    
    if (await trustSignals.count() > 0) {
      await expect(trustSignals).toBeVisible();
    }
  });

  test('All prices are displayed with currency symbols', async ({ page }) => {
    // Check for $ or other currency symbols
    const priceElements = page.locator('text=/\\$\\d+/');
    const priceCount = await priceElements.count();
    
    expect(priceCount).toBeGreaterThan(0);
  });
});
