import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("User is logged in", () => {
  cy.login();
  cy.pause();
});
