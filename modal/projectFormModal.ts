import { type Locator, type Page } from "@playwright/test";

export class ProjectFormModal {
  readonly page: Page;
  readonly modalTitle: Locator;
  readonly inputProjectName: Locator;
  readonly buttonConfirm: Locator;
  readonly loadingIndicator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.modalTitle = page.locator(
      `//p[contains(text(), "Create New Project")]`
    );
    this.inputProjectName = page.locator('//input[@id="name"]');
    this.buttonConfirm = page.locator('//button[@type="submit"]');
    this.loadingIndicator = page.locator('//span[@role="progressbar"]');
  }

  async fillProjectName({ projectName }: { projectName: string }) {
    await this.inputProjectName.fill(projectName);
  }

  async isVisible() {
    return await this.modalTitle.isVisible();
  }

  async clickBtnConfirm() {
    return await this.buttonConfirm.click();
  }
}
