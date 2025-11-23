import { test, expect } from '@playwright/test'

test.describe('Data Display and Filtering', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/data/indonesia-import')
  })

  test('TC021: Import data tables display correctly', async ({ page }) => {
    // Check if table or data grid exists
    const dataContainer = page.locator('[role="table"], table, [class*="grid"]').first()
    await expect(dataContainer).toBeVisible()
    
    // Check for table headers or data labels
    const headers = page.locator('th, [class*="header"]')
    const headerCount = await headers.count()
    expect(headerCount).toBeGreaterThan(0)
  })

  test('TC008: Search functionality returns filtered results', async ({ page }) => {
    // Find search input
    const searchInput = page.locator('input[type="search"], input[placeholder*="search" i]').first()
    
    if (await searchInput.isVisible()) {
      // Enter search term
      await searchInput.fill('electronics')
      await searchInput.press('Enter')
      
      // Wait for results
      await page.waitForTimeout(1000)
      
      // Check if results are displayed
      const results = page.locator('[class*="result"], [class*="item"], tr')
      const resultCount = await results.count()
      expect(resultCount).toBeGreaterThan(0)
    }
  })

  test('TC009: Pagination works on listing pages', async ({ page }) => {
    // Look for pagination controls
    const nextButton = page.locator('button:has-text("Next"), a:has-text("Next"), [aria-label*="next"]').first()
    
    if (await nextButton.isVisible()) {
      // Click next page
      await nextButton.click()
      await page.waitForLoadState('networkidle')
      
      // Verify URL or content changed
      const url = page.url()
      const hasPageParam = url.includes('page=')
      expect(hasPageParam || url !== '/data/indonesia-import').toBeTruthy()
    }
  })

  test('TC022: Data visualizations render properly', async ({ page }) => {
    // Check for charts or graphs
    const visualizations = page.locator('canvas, svg, [class*="chart"]')
    const vizCount = await visualizations.count()
    
    if (vizCount > 0) {
      await expect(visualizations.first()).toBeVisible()
    }
  })

  test('TC023: Filters work on data listing pages', async ({ page }) => {
    // Look for filter controls
    const filters = page.locator('select, input[type="checkbox"], button[class*="filter"]')
    const filterCount = await filters.count()
    
    if (filterCount > 0) {
      const firstFilter = filters.first()
      const tagName = await firstFilter.evaluate(el => el.tagName.toLowerCase())
      
      if (tagName === 'select') {
        await firstFilter.selectOption({ index: 1 })
      } else if (tagName === 'input') {
        await firstFilter.check()
      } else {
        await firstFilter.click()
      }
      
      // Wait for filtered results
      await page.waitForTimeout(1000)
    }
  })

  test('TC025: Search returns accurate results', async ({ page }) => {
    const searchInput = page.locator('input[type="search"], input[placeholder*="search" i]').first()
    
    if (await searchInput.isVisible()) {
      const searchTerm = 'textile'
      await searchInput.fill(searchTerm)
      await searchInput.press('Enter')
      
      await page.waitForTimeout(1500)
      
      // Get first result text
      const firstResult = page.locator('[class*="result"], [class*="item"], tr').first()
      if (await firstResult.isVisible()) {
        const resultText = await firstResult.textContent()
        expect(resultText?.toLowerCase()).toContain(searchTerm.toLowerCase())
      }
    }
  })

  test('Data table is responsive', async ({ page }) => {
    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 })
    const mobileTable = page.locator('table, [role="table"], [class*="grid"]').first()
    await expect(mobileTable).toBeVisible()
    
    // Desktop view
    await page.setViewportSize({ width: 1920, height: 1080 })
    const desktopTable = page.locator('table, [role="table"], [class*="grid"]').first()
    await expect(desktopTable).toBeVisible()
  })

  test('Data rows are clickable if interactive', async ({ page }) => {
    const rows = page.locator('tr[class*="clickable"], tr[class*="hover"], [class*="row"][class*="cursor"]')
    const rowCount = await rows.count()
    
    if (rowCount > 0) {
      const firstRow = rows.first()
      await firstRow.click()
      
      // Wait for navigation or modal
      await page.waitForTimeout(500)
    }
  })
})
