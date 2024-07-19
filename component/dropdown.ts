import { type Locator, type Page } from "@playwright/test";

export class Dropdown {
  readonly page: Page;
  readonly buttonShowOptions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonShowOptions = page.locator(
      '//input[@id="client-select"]/following-sibling::div/button[2]'
    );
  }

  async findBtnShowOptions({ dropdownLabel }: { dropdownLabel: string }) {
    return this.page.locator(
      `//label/p[text()="${dropdownLabel}"]/../../div//input/following-sibling::div/button[2]`
    );
  }

  async findOptionItem({ optionLabel }: { optionLabel: string }) {
    return this.page.locator(
      `//ul[@role="listbox"]/li[text()="${optionLabel}"]`
    );
  }

  async onClickBtnShowOptions({ dropdownLabel }: { dropdownLabel: string }) {
    (await this.findBtnShowOptions({ dropdownLabel })).click();
  }

  async onClickOptionItem({ optionLabel }: { optionLabel: string }) {
    (await this.findOptionItem({ optionLabel })).click();
  }
}
