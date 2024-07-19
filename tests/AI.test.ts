import { test } from "../base";
import { auto } from "auto-playwright";
import { ai } from "@zerostep/playwright";
import { StepOptions } from "auto-playwright/dist/types";

const options: StepOptions = {
  model: "gpt-3.5-turbo",
};

test("gpt-3.5-turbo", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");

  const email = "admin@populix.co";
  const pass = "Populix123@";
  await auto(`Type "${email}" in email address input`, { page, test }, options);
  await auto(`Type "${pass}" in password input`, { page, test }, options);
  await auto(`Click button "Sign In"`, { page, test }, options);

  // Home page
  // await auto(`Click close on Welcome back toast`, { page, test }, options);
  await auto(`Title "Project List" should exist`, { page, test }, options);
  const projectListContent = await page.content();
  console.log(JSON.stringify(projectListContent));
  await auto(`Click "New Project" button`, { page, test }, options);

  // Modal create new project
  await auto(
    `Modal with title "Create New Project" should exist`,
    { page, test },
    options
  );
  const timestampProjectName = `Test ${new Date().toISOString()}`;
  await auto(
    `Type "${timestampProjectName}" Project Name input`,
    { page, test },
    options
  );
});

test("zeroStep", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");

  const email = "admin@populix.co";
  const pass = "Populix123@";
  await ai(`Type "${email}" in email address input`, { page, test });
  await ai(`Type "${pass}" in password input`, { page, test });
  await ai(`Click button "Sign In"`, { page, test });

  // Home page

  await ai(`Title "Project List" should exist`, { page, test });
  await ai(`Click "New Project" button`, { page, test });

  // Modal create new project
  await ai(`Modal with title "Create New Project" should exist`, {
    page,
    test,
  });
  const timestampProjectName = `Test ${new Date().toISOString()}`;
  await ai(`Type "${timestampProjectName}" Project Name input`, { page, test });
});

test("Check content with AI", async ({ page, loginPage, projectPage }) => {
  await page.goto("/");
  await page.waitForLoadState("domcontentloaded");

  const email = "admin@populix.co";
  const pass = "Populix123@";

  await loginPage.login({ email, password: pass });
  await projectPage.isVisible();
  await page.goto("/projects/61/proposal");

  await ai("Await for load content", { page, test });
  const clientBackgroundInput = await ai(
    'Get value "Problem statement" input',
    {
      page,
      test,
    }
  );
  console.log(clientBackgroundInput, "CLIENT BACKGROUND");

  const researchObjectiveInformation = await ai(
    'Get all item list "Research objective" information',
    {
      page,
      test,
    }
  );
  console.log(researchObjectiveInformation);

  const result = await ai(
    'Give me in percentage, are "Problem statement" and "Client background" input is coherent with Generated Proposal "Research background" information ?',
    { page, test }
  );
  console.log(result, "RESULT IN PERCENTAGE PROBLEM STATEMENT");

  const resultResearchObjective = await ai(
    'Give me in percentage, are "Problem statement" and "Client background" input is coherent with Generated Proposal "Research objective" information ?',
    { page, test }
  );

  console.log(
    resultResearchObjective,
    "RESULT IN PERCENTAGE RESEARCH OBJECTIVE"
  );
});
