import { test, expect } from '@playwright/test';

test.describe('Contact Form Submission', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('TC006-TC008: Complete contact form submission flow', async ({ page }) => {
    // Verify we're on contact page
    await expect(page).toHaveURL('/contact');
    await expect(page.locator('h1')).toContainText('Get in Touch');

    // Fill out all required fields
    const fullNameInput = page.locator('input[placeholder*="John Doe"]');
    await fullNameInput.fill('Jane Smith');

    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('jane.smith@example.com');

    const companyInput = page.locator('input[placeholder*="Company"]');
    await companyInput.fill('Test Company Inc.');

    const phoneInput = page.locator('input[type="tel"]');
    await phoneInput.fill('+1 (555) 123-4567');

    const messageTextarea = page.locator('textarea[placeholder*="inquiry"]');
    await messageTextarea.fill('This is a test message for automated testing purposes.');

    // Submit form
    const submitButton = page.locator('button:has-text("Send Message")');
    await submitButton.click();

    // Wait for submission
    await page.waitForTimeout(2000);

    // Verify success message
    await expect(page.locator('text=/Thank You|received your message/i')).toBeVisible();
    await expect(page.locator('text=/24 hours/i')).toBeVisible();
  });

  test('TC007: Form validation shows errors for empty required fields', async ({ page }) => {
    // Try to submit without filling fields
    const submitButton = page.locator('button:has-text("Send Message")');
    await submitButton.click();

    // Check for validation errors
    await page.waitForTimeout(500);

    // Full name error
    const nameError = page.locator('text=/name is required/i');
    await expect(nameError).toBeVisible();

    // Email error
    const emailError = page.locator('text=/email is required/i');
    await expect(emailError).toBeVisible();

    // Message error
    const messageError = page.locator('text=/message is required/i');
    await expect(messageError).toBeVisible();
  });

  test('TC007: Form validates email format', async ({ page }) => {
    // Fill with invalid email
    const fullNameInput = page.locator('input[placeholder*="John Doe"]');
    await fullNameInput.fill('Test User');

    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('invalid-email');

    const messageTextarea = page.locator('textarea');
    await messageTextarea.fill('Test message');

    const submitButton = page.locator('button:has-text("Send Message")');
    await submitButton.click();

    await page.waitForTimeout(500);

    // Check for email validation error
    const emailError = page.locator('text=/valid email/i');
    await expect(emailError).toBeVisible();
  });

  test('Contact information is displayed correctly', async ({ page }) => {
    // Verify contact details sidebar
    await expect(page.locator('text=/support@tradeintelligence.com/i')).toBeVisible();
    await expect(page.locator('text=/\\+1 \\(555\\)/i')).toBeVisible();
    await expect(page.locator('text=/San Francisco/i')).toBeVisible();
  });

  test('Office hours are displayed', async ({ page }) => {
    await expect(page.locator('text=/Office Hours/i')).toBeVisible();
    await expect(page.locator('text=/Monday - Friday/i')).toBeVisible();
    await expect(page.locator('text=/9:00 AM - 6:00 PM/i')).toBeVisible();
  });

  test('Response time guarantee is displayed', async ({ page }) => {
    await expect(page.locator('text=/24 Hours/i')).toBeVisible();
    await expect(page.locator('text=/Fast Response/i')).toBeVisible();
  });
});
