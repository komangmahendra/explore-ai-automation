import { type Locator, type Page } from "@playwright/test";

export class Toast {
  readonly page: Page;
  readonly buttonCloseToast: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonCloseToast = page.locator(
      `//button[@class="Toastify__close-button"]`
    );
  }

  async onCloseToast() {
    await this.buttonCloseToast.click();
  }
}
