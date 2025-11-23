import { test, expect } from '@playwright/test'

test.describe('Contact Form Submission Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact')
  })

  test('TC006: Contact form validates all required fields', async ({ page }) => {
    // Try to submit empty form
    await page.click('button[type="submit"]')
    
    // Wait for validation errors
    await page.waitForTimeout(500)
    
    // Check for error messages
    const errors = page.locator('[role="alert"]')
    const errorCount = await errors.count()
    
    expect(errorCount).toBeGreaterThan(0)
  })

  test('TC007: Contact form submits successfully with valid data', async ({ page }) => {
    // Fill form with valid data
    await page.fill('input[name="firstName"]', 'John')
    await page.fill('input[name="lastName"]', 'Doe')
    await page.fill('input[name="email"]', 'john.doe@example.com')
    await page.fill('input[name="company"]', 'Acme Corp')
    await page.selectOption('select[name="role"]', { index: 1 })
    await page.selectOption('select[name="inquiry"]', { index: 1 })
    await page.fill('textarea[name="message"]', 'This is a test message with more than 10 characters.')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Wait for success message
    await page.waitForTimeout(2000)
    
    // Check for success indicator
    const successMessage = page.locator('text=/thank you|success|submitted/i')
    await expect(successMessage).toBeVisible({ timeout: 5000 })
  })

  test('TC010: Form error messages display properly', async ({ page }) => {
    // Fill with invalid email
    await page.fill('input[name="email"]', 'invalid-email')
    await page.locator('input[name="email"]').blur()
    
    // Check for email error
    await page.waitForTimeout(300)
    const emailError = page.locator('text=/valid email/i')
    await expect(emailError).toBeVisible({ timeout: 2000 })
    
    // Fill with too short message
    await page.fill('textarea[name="message"]', 'short')
    await page.locator('textarea[name="message"]').blur()
    
    await page.waitForTimeout(300)
    const messageError = page.locator('text=/at least 10/i')
    await expect(messageError).toBeVisible({ timeout: 2000 })
  })

  test('TC011-TC013: Form renders correctly on all screen sizes', async ({ page }) => {
    // Mobile (320px)
    await page.setViewportSize({ width: 320, height: 568 })
    await expect(page.locator('form')).toBeVisible()
    
    // Tablet (768px)
    await page.setViewportSize({ width: 768, height: 1024 })
    await expect(page.locator('form')).toBeVisible()
    
    // Desktop (1920px)
    await page.setViewportSize({ width: 1920, height: 1080 })
    await expect(page.locator('form')).toBeVisible()
  })

  test('Form fields are accessible', async ({ page }) => {
    // Check for proper labels
    const firstName = page.locator('input[name="firstName"]')
    const label = await firstName.getAttribute('aria-label') || 
                   await page.locator(`label[for="${await firstName.getAttribute('id')}"]`).textContent()
    
    expect(label).toBeTruthy()
  })

  test('Form handles submission loading state', async ({ page }) => {
    // Fill form
    await page.fill('input[name="firstName"]', 'John')
    await page.fill('input[name="lastName"]', 'Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('input[name="company"]', 'Test Co')
    await page.selectOption('select[name="role"]', { index: 1 })
    await page.selectOption('select[name="inquiry"]', { index: 1 })
    await page.fill('textarea[name="message"]', 'Test message for submission')
    
    // Click submit
    await page.click('button[type="submit"]')
    
    // Check if button shows loading state
    const submitButton = page.locator('button[type="submit"]')
    const isDisabled = await submitButton.isDisabled()
    
    expect(isDisabled).toBe(true)
  })
})
