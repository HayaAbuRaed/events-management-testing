import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { eventId } from "cypress/support/hooks/eventSetupHooks";
import EventFormActions from "../scheduling/eventForm/pageObjects/actions";

Given("The user navigates to events grid", () => {
  cy.visit("/react/in-store-experience/scheduler-tools?activeSchedulerTools=Events");
  cy.pause();
});

When("The user clicks on an existing event record", () => {
  EventFormActions.clickEventRow(eventId);
});
