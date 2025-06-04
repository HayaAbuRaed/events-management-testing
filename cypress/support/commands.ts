/// <reference types="cypress" />

import LoginPageActions from "cypress/e2e/login/pageObjects/actions";
import { Credentials } from "./types";

declare global {
  namespace Cypress {
    interface Chainable {
      login(credentials?: Credentials): Chainable<void>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("login", (credentials?: Credentials) => {
  const username = credentials?.username || Cypress.env("defaultUsername");
  const password = credentials?.password || Cypress.env("defaultPassword");

  LoginPageActions.visit();
  LoginPageActions.fillUsername(username);
  LoginPageActions.fillPassword(password);
  LoginPageActions.clickLoginButton();
});

Cypress.Commands.add("getByTestId", (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});
