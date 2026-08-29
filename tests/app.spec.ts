import { test, expect } from "@playwright/test"
import AxeBuilder from "@axe-core/playwright"

test.describe("Accessibility Audits", () => {
  test("should pass WCAG 2.1 AA audits in light theme", async ({ page }) => {
    await page.goto("/")
    
    // Wait for the page load color transitions to settle
    await page.waitForTimeout(400)

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()
    expect(results.violations).toEqual([])
  })

  test("should pass WCAG 2.1 AA audits in dark theme", async ({ page }) => {
    await page.goto("/")
    // Switch to dark theme
    const toggle = page.getByLabel(/Switch to dark mode/i).filter({ visible: true })
    await toggle.click()
    await expect(page.locator("html")).toHaveClass(/dark/)

    // Wait for 300ms theme transitions to settle
    await page.waitForTimeout(400)

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()
    expect(results.violations).toEqual([])
  })
})

test.describe("Theme Toggle & Persistence", () => {
  test("should toggle dark mode class and persist on reload", async ({ page }) => {
    await page.goto("/")
    const html = page.locator("html")
    const toggle = page.getByLabel(/Switch to dark mode/i).filter({ visible: true })

    // Initially light mode (or system pref, let's toggle to ensure change)
    const isInitiallyDark = await html.evaluate((el) => el.classList.contains("dark"))

    await toggle.click()
    if (isInitiallyDark) {
      await expect(html).not.toHaveClass(/dark/)
    } else {
      await expect(html).toHaveClass(/dark/)
    }

    // Reload the page
    await page.reload()
    if (isInitiallyDark) {
      await expect(html).not.toHaveClass(/dark/)
    } else {
      await expect(html).toHaveClass(/dark/)
    }
  })
})

test.describe("Navigation Menu", () => {
  test("should render logo and links on desktop", async ({ page, isMobile }) => {
    test.skip(isMobile, "Desktop test only")
    await page.goto("/")

    // Verify logo and navigation pills are visible
    await expect(page.locator("header").getByText("</kavprist>")).toBeVisible()
    await expect(page.locator("nav").getByRole("link", { name: "Home" })).toBeVisible()
    await expect(page.locator("nav").getByRole("link", { name: "About" })).toBeVisible()
    await expect(page.locator("nav").getByRole("link", { name: "Services" })).toBeVisible()
    await expect(page.locator("nav").getByRole("link", { name: "Contact" })).toBeVisible()
  })

  test("should display hamburger menu and drawer footer on mobile", async ({ page, isMobile }) => {
    test.skip(!isMobile, "Mobile test only")
    await page.goto("/")

    // Desktop links should be hidden
    await expect(page.locator("nav").getByRole("link", { name: "Home" })).toBeHidden()

    // Hamburger button should be visible
    const hamburger = page.getByLabel("Toggle Menu")
    await expect(hamburger).toBeVisible()
    await hamburger.click()

    // Drawer should open and contain footer links
    await expect(page.getByText("Menu")).toBeVisible()
    await expect(page.getByText("Contact Info")).toBeVisible()
    await expect(page.getByRole("link", { name: "help@domain.com" })).toBeVisible()
  })
})

test.describe("Contact Form", () => {
  test("should accept input and submit successfully", async ({ page }) => {
    await page.goto("/")

    // Fill contact form fields
    const nameInput = page.getByPlaceholder("Your Name")
    const emailInput = page.getByPlaceholder("you@example.com")
    const messageInput = page.getByPlaceholder("How can we help you?")

    await nameInput.fill("John Doe")
    await emailInput.fill("john@example.com")
    await messageInput.fill("Hello, this is a test message.")

    // Submit the form
    await page.getByRole("button", { name: "Submit" }).click()

    // Verify inputs reset
    await expect(nameInput).toHaveValue("")
    await expect(emailInput).toHaveValue("")
    await expect(messageInput).toHaveValue("")
  })
})
