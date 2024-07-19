import { type Locator, type Page } from "@playwright/test";

export class ProjectPage {
  readonly page: Page;
  readonly headerPage: Locator;
  readonly buttonCreateNewProject: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerPage = page.locator(`//h5[contains(text(), "Project List")]`);
    this.buttonCreateNewProject = page.locator("//button", {
      hasText: "New Project",
    });
  }

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async isVisible() {
    return await this.headerPage.isVisible();
  }

  async clickNewProject() {
    await this.buttonCreateNewProject.click();
  }
}
