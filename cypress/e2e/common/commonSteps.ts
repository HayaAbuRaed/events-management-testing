import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("The user navigates to events grid", () => {
  cy.visit("/react/in-store-experience/scheduler-tools?activeSchedulerTools=Events");
  cy.pause();
});
