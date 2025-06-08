import { LocationCleanupData, LocationSetupData } from "./types";
/// <reference types="cypress" />

import LoginPageActions from "cypress/e2e/login/pageObjects/actions";
import { Credentials } from "./types";
import { mainLogin } from "./utils";
import { createLegalEntity, deleteLegalEntity } from "./apiHelpers/legalEntity";
import { createLocation, deleteLocation } from "./apiHelpers/location";

declare global {
  namespace Cypress {
    interface Chainable {
      login(credentials?: Credentials): Chainable<void>;
      loginWithApi(credentials?: Credentials): Chainable<void>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      setupTestLocation(): Chainable<LocationSetupData>;
      cleanupTestLocation(cleanUpData: LocationCleanupData): Chainable<void>;
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

  mainLogin(username, password).then(() => {
    const { userId } = JSON.parse(localStorage.getItem("loggedInUserDetails") || "");
    Cypress.env("DEFAULT_USER_ID", userId);
  });
});

Cypress.Commands.add("setupTestLocation", () => {
  createLegalEntity({
    dueFromAccount: Cypress.env("dueFromGLAccount"),
    dueToAccount: Cypress.env("dueToGLAccount"),
  }).then((legalEntityRes) => {
    return createLocation(legalEntityRes.Id).then((locationRes) => {
      return cy.wrap({
        createdLegalEntityId: legalEntityRes.Id,
        createdLocationId: locationRes.Id,
        createdLocationName: locationRes.dm_name,
      });
    });
  });
});

Cypress.Commands.add(
  "cleanupTestLocation",
  ({ locationId, legalEntityId }: LocationCleanupData) => {
    locationId && deleteLocation(locationId);
    legalEntityId && deleteLegalEntity(legalEntityId);
  }
);
