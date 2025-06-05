/// <reference types="cypress" />

import LoginPageActions from "cypress/e2e/login/pageObjects/actions";
import { Credentials } from "./types";
import { GetNetCoreUrlPrefix, GetServiceStackUrlPrefix } from "./utils";
import { EMPTY_GUID } from "./constatnts";

declare global {
  namespace Cypress {
    interface Chainable {
      login(credentials?: Credentials): Chainable<void>;
      loginWithApi(credentials?: Credentials): Chainable<void>;
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

Cypress.Commands.add("loginWithApi", (credentials?: Credentials) => {
  const username = credentials?.username || Cypress.env("defaultUsername");
  const password = credentials?.password || Cypress.env("defaultPassword");

  Cypress.log({
    name: "login with API",
    message: `Logging in with username: ${username}`,
  });

  cy.request({
    body: {
      UserName: username,
      Password: password,
    },
    method: "POST",
    url: GetServiceStackUrlPrefix("auth/credentials?isFromWeb=true"),
    headers: { Accept: "application/json, text/plain, */*" },
    log: false,
  }).then((response) => {
    localStorage.setItem("userInfo", JSON.stringify(response.body));
    cy.request({
      headers: { Accept: "application/json" },
      method: "GET",
      url: GetServiceStackUrlPrefix(`Preferences/${EMPTY_GUID}`),
      failOnStatusCode: false,
      log: false,
    });
    cy.request({
      headers: { Accept: "application/json" },
      method: "GET",
      url: GetServiceStackUrlPrefix(`SessionData/${response.body.SessionId}`),
      failOnStatusCode: false,
      log: false,
    }).then((res) => {
      localStorage.setItem("loggedInUserDetails", JSON.stringify(res.body));
      cy.request({
        method: "GET",
        url: GetNetCoreUrlPrefix(`Permissions/User/${res.body.userId}`),
        failOnStatusCode: false,
        log: false,
      });
    });
    cy.request({
      method: "GET",
      url: GetNetCoreUrlPrefix("User/NavigationPrivileges/v2"),
      log: false,
      failOnStatusCode: false,
    }).then((res) => {
      localStorage.setItem("navigationPrivileges", JSON.stringify(res.body));
    });

    Cypress.log({
      name: "login status",
      message: `user ${username} logged in successfully`,
    });
  });
});
