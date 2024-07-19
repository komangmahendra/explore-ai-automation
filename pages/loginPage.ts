import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly inputEmail: Locator;
  readonly inputPassword: Locator;
  readonly buttonSignIn: Locator;
  readonly gettingStartedHeader: Locator;
  readonly pomLink: Locator;
  readonly tocList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator(`//h1[contains(text(), "Sign In")]`);
    this.inputEmail = page.locator(`//input[@id="email"]`);
    this.inputPassword = page.locator(`//input[@id="password"]`);
    this.buttonSignIn = page.locator("//button", { hasText: "Sign In" });
    // this.gettingStartedHeader = page.locator("h1", { hasText: "Installation" });
    // this.pomLink = page
    //   .locator("li", {
    //     hasText: "Guides",
    //   })
    //   .locator("a", {
    //     hasText: "Page Object Model",
    //   });
    // this.tocList = page.locator("article div.markdown ul > li > a");
  }

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async login({ email, password }: { email: string; password: string }) {
    await this.inputEmail.fill(email);
    await this.inputPassword.fill(password);
    await this.buttonSignIn.click();
  }

  async isVisible() {
    return await this.pageTitle.isVisible();
  }
}
