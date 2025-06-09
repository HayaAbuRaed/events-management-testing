import { After, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { deleteLegalEntity } from "cypress/support/apiHelpers/legalEntity";
import { deleteLocation } from "cypress/support/apiHelpers/location";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";

let eventId: string;
let locationId: string;
let legalEntityId: string;

Before({ tags: "@EMT-3_DeleteExistingEvent" }, () => {
  cy.setupTestEvent().then((data) => {
    eventId = data.eventId;
    locationId = data.locationId;
    legalEntityId = data.legalEntityId;
  });
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

After({ tags: "@EMT-3_DeleteExistingEvent" }, () => {
  locationId &&
    deleteLocation(locationId).then(() => {
      legalEntityId && deleteLegalEntity(legalEntityId);
    });
});
