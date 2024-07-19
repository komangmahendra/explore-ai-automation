import { type Locator, type Page } from "@playwright/test";
import { Dropdown } from "../component/dropdown";

export class ProjectProposalPage {
  readonly page: Page;
  readonly inputProjectName: Locator;
  readonly inputProblemStatement: Locator;
  readonly inputClientBackground: Locator;
  readonly buttonGenerate: Locator;
  readonly dropdown: Dropdown;

  constructor(page: Page) {
    this.page = page;
    this.dropdown = new Dropdown(page);
    this.inputProjectName = page.locator(`//input[@id="projectName"]`);
    this.inputProblemStatement = page.locator(
      `//input[@id="problemStatement"]`
    );
    this.inputClientBackground = page.locator(
      `//input[@id="clientBackground"]`
    );
    this.buttonGenerate = page.locator(`//button[@type="submit"]`);
  }

  async goto() {
    await this.page.goto("https://playwright.dev");
  }

  async fillProjectName({ projectName }: { projectName: string }) {
    await this.inputProjectName.fill(projectName);
  }

  async fillProblemStatement({
    problemStatement,
  }: {
    problemStatement: string;
  }) {
    await this.inputProblemStatement.fill(problemStatement);
  }

  async isVisible() {
    return await this.page
      .locator('//h6[contains(text(), "Input Information")]')
      .isVisible();
  }

  async fillClientBackground({
    clientBackground,
  }: {
    clientBackground: string;
  }) {
    await this.inputClientBackground.fill(clientBackground);
  }

  async clickGenerateProposal() {
    await this.buttonGenerate.click();
  }
}
