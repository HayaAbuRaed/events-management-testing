import { After, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { deleteLegalEntity } from "cypress/support/apiHelpers/legalEntity";
import { deleteLocation } from "cypress/support/apiHelpers/location";
import {
  eventId,
  legalEntityId,
  locationId,
  setupEventTest,
} from "cypress/support/hooks/eventSetupHooks";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";

Before({ tags: "@EMT-3_DeleteExistingEvent" }, setupEventTest);

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
  EventFormAssertions.assertEventPresenceInTable({ eventName: eventId, shouldExist: false });
});

After({ tags: "@EMT-3_DeleteExistingEvent" }, () => {
  locationId &&
    deleteLocation(locationId).then(() => {
      legalEntityId && deleteLegalEntity(legalEntityId);
    });
});
