import { After, Before, When } from "@badeball/cypress-cucumber-preprocessor";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";
import { EVENT_NAME } from "cypress/support/testData/events";

const UPDATED_EVENT_NAME = `${EVENT_NAME} Updated`;

let eventId: string;
let locationId: string;
let legalEntityId: string;

Before({ tags: "@EMT-4_UpdateExistingEvent" }, () => {
  cy.setupTestEvent().then((data) => {
    eventId = data.eventId;
    locationId = data.locationId;
    legalEntityId = data.legalEntityId;
  });
});

When("The user clicks on an existing event record", () => {
  EventFormActions.clickEventRow(eventId);
});

When("The user updates the event details with valid data", () => {
  EventFormActions.fillEventName(UPDATED_EVENT_NAME);
});

When('The user clicks on the "Save" button', () => {
  EventFormActions.clickSaveButton();
});

When('The user should see a snack bar with "Updated successfully" success message', () => {
  EventFormAssertions.checkEventUpdatedSnackbar();
});

When("The updated event should be present in the events table with the new details", () => {
  EventFormAssertions.checkEventIsAddedToTable(UPDATED_EVENT_NAME);
});

After({ tags: "@EMT-4_UpdateExistingEvent" }, () =>
  cy.cleanupEventTestData({
    eventId: eventId,
    locationId: locationId,
    legalEntityId: legalEntityId,
  })
);
