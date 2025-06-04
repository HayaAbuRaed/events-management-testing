import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import ManagerToolsActions from "cypress/e2e/scheduling/managerTools/pageObjects/actions";
import ClassicHomeActions from "cypress/e2e/shared/pageObjects/classicHome/actions";
import SmartOperationsHomeActions from "cypress/e2e/shared/pageObjects/smartOperationsHome/actions";
import EventFormAssertions from "../../../pageObjects/assertions";
import EventFormActions from "../../../pageObjects/actions";

Given("User is logged in", () => {
  cy.login();
  cy.pause();
});

When('User navigates to the "Smart Operations" page', () => {
  ClassicHomeActions.navigateToSmartOperations();
  cy.pause();
});

When('User navigates to the "Manager Tools" section', () => {
  SmartOperationsHomeActions.navigateToManagerTools();
  cy.pause();
});

When('User navigates to the "Events" Panel', () => {
  ManagerToolsActions.clickOnEventsTab();
  cy.pause();
});

When('User clicks on the "Create" button', () => {
  ManagerToolsActions.clickOnCreateButton();
  cy.pause();
});

When('User chooses "Event" from the dropdown', () => {
  ManagerToolsActions.clickOnCreateEventListItem();
  cy.pause();
});

When('User should see the "Create Event" form', () => {
  EventFormAssertions.checkCreateEventFormIsVisible();
});

When('User fills in the event details with valid information', () => {
  EventFormActions.fillEventDate("2025-6-5");
});
