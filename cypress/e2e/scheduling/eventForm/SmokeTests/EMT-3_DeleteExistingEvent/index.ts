import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { createEvent, deleteEvent } from "cypress/support/apiHelpers/event";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";
import { deleteLegalEntity } from "cypress/support/apiHelpers/legalEntity";
import { deleteLocation } from "cypress/support/apiHelpers/location";

let eventId: string;
let locationId: string;
let legalEntityId: string;

before(() => {
  cy.setupTestEvent().then((data) => {
    eventId = data.eventId;
    locationId = data.locationId;
    legalEntityId = data.legalEntityId;
  });
});

Given("The user navigates to events tab", () => {
  cy.visit("/react/in-store-experience/scheduler-tools?activeSchedulerTools=Events");
  cy.pause();
});

When("The user selects an existing event", () => {
  EventFormActions.clickEventRow(eventId);
});

When('The user clicks on the "Delete" button', () => {
  EventFormActions.clickDeleteButton();
});

When("The user confirms the deletion", () => {
  EventFormAssertions.checkIsDeletionConfirmationDialogVisible();
  EventFormActions.clickConfirmDeleteButton();
});

Then('The user should see a snack bar with "Deleted successfully" success message', () => {
  EventFormAssertions.checkEventDeletedSnackbar();
});

Then("The event should no longer be present in the events table", () => {
  EventFormAssertions.checkEventIsNotInTable(eventId);
});

after(() => {
  locationId &&
    deleteLocation(locationId).then(() => {
      legalEntityId && deleteLegalEntity(legalEntityId);
    });
});
