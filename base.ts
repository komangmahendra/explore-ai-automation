import { test as base } from "@playwright/test";
import { LoginPage } from "./pages/loginPage";
import { ProjectPage } from "./pages/projectPage";
import { ProjectFormModal } from "./modal/projectFormModal";
import { ProjectProposalPage } from "./pages/projectProposalPage";

type MyFixtures = {
  loginPage: LoginPage;
  projectPage: ProjectPage;
  proposalPage: ProjectProposalPage;
  projectFormModal: ProjectFormModal;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  projectPage: async ({ page }, use) => {
    await use(new ProjectPage(page));
  },
  projectFormModal: async ({ page }, use) => {
    await use(new ProjectFormModal(page));
  },
  proposalPage: async ({ page }, use) => {
    await use(new ProjectProposalPage(page));
  },
});

export { expect } from "@playwright/test";
