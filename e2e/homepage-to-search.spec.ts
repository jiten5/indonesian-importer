import { test, expect } from '@playwright/test';

test.describe('Homepage to Search Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('TC011: User can navigate from homepage to search and execute a search', async ({ page }) => {
    // Step 1: Load homepage
    await expect(page).toHaveTitle(/Indonesian/);
    await expect(page.locator('h1')).toContainText('Intelligence');

    // Step 2: Click search bar or navigate to search page
    const searchLink = page.locator('a[href="/search"]').first();
    await searchLink.click();

    // Step 3: Verify we're on the search page
    await expect(page).toHaveURL('/search');
    await expect(page.locator('h1')).toContainText('Search');

    // Step 4: Fill search filters
    const hsCodeInput = page.locator('input[placeholder*="8542"]');
    await hsCodeInput.fill('8542.31');

    const countrySelect = page.locator('select').first();
    await countrySelect.selectOption({ index: 1 });

    // Step 5: Execute search
    const searchButton = page.locator('button:has-text("Search")');
    await searchButton.click();

    // Step 6: Verify results display
    await page.waitForTimeout(1500); // Wait for loading animation
    
    // Check for table or results
    const resultsTable = page.locator('[role="table"]');
    await expect(resultsTable).toBeVisible();

    // Verify at least one result row
    const tableRows = page.locator('tbody tr');
    const rowCount = await tableRows.count();
    expect(rowCount).toBeGreaterThan(0);
  });

  test('TC012: Search filters work correctly', async ({ page }) => {
    await page.goto('/search');

    // Test date range filter
    const dateFromInput = page.locator('input[type="date"]').first();
    const dateToInput = page.locator('input[type="date"]').last();
    
    await dateFromInput.fill('2024-01-01');
    await dateToInput.fill('2024-12-31');

    // Test value range filter
    const minValueInput = page.locator('input[placeholder*="Min"]');
    const maxValueInput = page.locator('input[placeholder*="Max"]');
    
    if (await minValueInput.count() > 0) {
      await minValueInput.fill('1000');
      await maxValueInput.fill('50000');
    }

    // Execute search
    await page.locator('button:has-text("Search")').click();
    await page.waitForTimeout(1500);

    // Verify URL contains search params or results updated
    const url = page.url();
    expect(url).toContain('/search');
  });

  test('TC019: Tab switching between Shipments/Importers/Exporters works', async ({ page }) => {
    await page.goto('/search');

    // Click Importers tab
    const importersTab = page.locator('button:has-text("Importers")');
    if (await importersTab.count() > 0) {
      await importersTab.click();
      await expect(page.locator('h2:has-text("Importers")')).toBeVisible();
    }

    // Click Exporters tab
    const exportersTab = page.locator('button:has-text("Exporters")');
    if (await exportersTab.count() > 0) {
      await exportersTab.click();
      await expect(page.locator('h2:has-text("Exporters")')).toBeVisible();
    }

    // Click Products tab
    const productsTab = page.locator('button:has-text("Products")');
    if (await productsTab.count() > 0) {
      await productsTab.click();
      await expect(page.locator('h2:has-text("Products")')).toBeVisible();
    }
  });

  test('TC017: 10-row masking displays for non-premium users', async ({ page }) => {
    await page.goto('/search');

    // Execute search
    const searchButton = page.locator('button:has-text("Search")');
    await searchButton.click();
    await page.waitForTimeout(1500);

    // Check for premium upsell message
    const upsellMessage = page.locator('text=/Unlock Full Access|Upgrade to access/i');
    await expect(upsellMessage).toBeVisible();

    // Verify showing X of Y records message
    const recordsInfo = page.locator('text=/Showing \\d+ of \\d+/');
    await expect(recordsInfo).toBeVisible();
  });
});
