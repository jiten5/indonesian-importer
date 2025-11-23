import { test, expect } from '@playwright/test'

test.describe('Homepage Navigation and User Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('TC001: Navbar links navigate to correct pages', async ({ page }) => {
    // Test Platform dropdown
    await page.hover('text=Platform')
    await page.click('text=Data Intelligence')
    await expect(page).toHaveURL('/platform/data-intelligence')
    
    // Navigate back and test another link
    await page.goto('/')
    await page.hover('text=Platform')
    await page.click('text=API Access')
    await expect(page).toHaveURL('/platform/api')
    
    // Test direct navigation links
    await page.goto('/')
    await page.click('text=Pricing')
    await expect(page).toHaveURL('/pricing')
    
    await page.goto('/')
    await page.click('text=About')
    await expect(page).toHaveURL('/about')
  })

  test('TC002: Mobile menu opens/closes properly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 }) // iPhone SE
    
    // Open mobile menu
    const menuButton = page.locator('button[aria-label*="menu" i]').first()
    await menuButton.click()
    
    // Verify menu is visible
    await expect(page.locator('nav').first()).toBeVisible()
    
    // Close menu
    await menuButton.click()
    
    // Verify menu is hidden
    await expect(page.locator('nav').first()).not.toBeVisible()
  })

  test('TC003: Footer links function correctly', async ({ page }) => {
    // Scroll to footer
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    
    // Test footer link
    await page.click('footer >> text=Contact')
    await expect(page).toHaveURL('/contact')
  })

  test('TC005: Logo returns to home page', async ({ page }) => {
    // Navigate to another page
    await page.click('text=Pricing')
    await expect(page).toHaveURL('/pricing')
    
    // Click logo to return home
    await page.locator('a[href="/"]').first().click()
    await expect(page).toHaveURL('/')
  })

  test('TC016: Page load time < 3 seconds', async ({ page }) => {
    const startTime = Date.now()
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    const loadTime = Date.now() - startTime
    
    expect(loadTime).toBeLessThan(3000)
  })

  test('TC019: Images lazy-load correctly', async ({ page }) => {
    await page.goto('/')
    
    // Check if images have loading="lazy" attribute
    const images = page.locator('img')
    const count = await images.count()
    
    for (let i = 0; i < Math.min(count, 5); i++) {
      const img = images.nth(i)
      const loading = await img.getAttribute('loading')
      expect(loading).toBe('lazy')
    }
  })

  test('TC026: Dark mode toggle works', async ({ page }) => {
    await page.goto('/')
    
    // Find and click dark mode toggle
    const themeToggle = page.locator('button[aria-label*="theme" i]').first()
    await themeToggle.click()
    
    // Wait for theme change
    await page.waitForTimeout(500)
    
    // Check if dark class is applied to html or body
    const htmlClass = await page.locator('html').getAttribute('class')
    expect(htmlClass).toContain('dark')
  })

  test('TC027: All components visible in dark mode', async ({ page }) => {
    await page.goto('/')
    
    // Enable dark mode
    const themeToggle = page.locator('button[aria-label*="theme" i]').first()
    await themeToggle.click()
    await page.waitForTimeout(500)
    
    // Check if main content is visible
    await expect(page.locator('main')).toBeVisible()
    await expect(page.locator('nav')).toBeVisible()
    await expect(page.locator('footer')).toBeVisible()
  })

  test('TC030: Keyboard navigation works on all pages', async ({ page }) => {
    await page.goto('/')
    
    // Press Tab to navigate
    await page.keyboard.press('Tab')
    await page.keyboard.press('Tab')
    
    // Check if an element is focused
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName)
    expect(['A', 'BUTTON', 'INPUT']).toContain(focusedElement)
  })

  test('TC033: Meta tags present on all pages', async ({ page }) => {
    const pages = ['/', '/pricing', '/about', '/contact']
    
    for (const url of pages) {
      await page.goto(url)
      
      // Check for title
      const title = await page.title()
      expect(title).toBeTruthy()
      expect(title.length).toBeGreaterThan(0)
      
      // Check for meta description
      const description = await page.locator('meta[name="description"]').getAttribute('content')
      expect(description).toBeTruthy()
    }
  })
})
