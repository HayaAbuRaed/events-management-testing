import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { createEvent, deleteEvent } from "cypress/support/apiHelpers/event";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";

let eventId: string;

before(() => {
  createEvent().then((event) => {
    eventId = event.id;
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

// after(() => {
//   deleteEvent(eventId);
// });
