import { EventCleanupData, EventSetupData, LocationSetupData } from "./types";
/// <reference types="cypress" />

import LoginPageActions from "cypress/e2e/login/pageObjects/actions";
import { Credentials } from "./types";
import { mainLogin } from "./utils";
import { createLegalEntity, deleteLegalEntity } from "./apiHelpers/legalEntity";
import { createLocation, deleteLocation } from "./apiHelpers/location";
import { createEvent, deleteEvent } from "./apiHelpers/event";

declare global {
  namespace Cypress {
    interface Chainable {
      login(credentials?: Credentials): Chainable<void>;
      loginWithApi(credentials?: Credentials): Chainable<void>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      setupTestLocation(): Chainable<LocationSetupData>;
      cleanupEventTestData(cleanUpData: EventCleanupData): Chainable;
      setupTestEvent(): Chainable<EventSetupData>;
      getByRole(role: string): Chainable<JQuery<HTMLElement>>;
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

Cypress.Commands.add("getByRole", (role: string) => {
  return cy.get(`[role="${role}"]`);
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
  "cleanupEventTestData",
  ({ eventId, locationId, legalEntityId }: EventCleanupData) => {
    return cy
      .then(() => {
        if (eventId) {
          return deleteEvent(eventId);
        }
      })
      .then(() => {
        if (locationId) {
          return deleteLocation(locationId);
        }
      })
      .then(() => {
        if (legalEntityId) {
          return deleteLegalEntity(legalEntityId);
        }
      });
  }
);

Cypress.Commands.add("setupTestEvent", () => {
  return createLegalEntity({
    dueFromAccount: Cypress.env("dueFromGLAccount"),
    dueToAccount: Cypress.env("dueToGLAccount"),
  }).then((legalEntityRes) => {
    const legalEntityId = legalEntityRes.Id;

    return createLocation(legalEntityId).then((locationRes) => {
      const locationId = locationRes.Id;
      const locationName = locationRes.dm_name;

      return createEvent({
        id: locationId,
        name: locationName,
      }).then((event) => {
        return cy.wrap({
          eventId: event.id,
          locationId: locationId,
          legalEntityId: legalEntityId,
        });
      });
    });
  });
});
