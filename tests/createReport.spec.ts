import { test, expect } from "../base";

test("Create Report", async ({
  page,
  loginPage,
  projectPage,
  projectFormModal,
  proposalPage,
}) => {
  await page.goto("http://localhost:5173");
  await page.waitForLoadState("domcontentloaded");

  const email = "admin@populix.co";
  const pass = "Populix123@";

  await loginPage.login({ email, password: pass });

  await projectPage.isVisible();
  await projectPage.clickNewProject();

  await projectFormModal.isVisible();
  await projectFormModal.fillProjectName({ projectName: "Test 123" });
  await projectFormModal.clickBtnConfirm();
  await expect(projectFormModal.loadingIndicator).toHaveCount(0);

  await proposalPage.isVisible();
  // await proposalPage.dropdown.onClickBtnShowOptions({
  //   dropdownLabel: "Client",
  // });
  // await proposalPage.dropdown.onClickOptionItem({
  //   optionLabel: "Bank ABC",
  // });
});
