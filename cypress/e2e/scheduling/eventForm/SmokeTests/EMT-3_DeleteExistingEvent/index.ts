import { After, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import CommonAssertions from "cypress/e2e/common/commonAssertions";
import { deleteLegalEntity } from "cypress/support/apiHelpers/legalEntity";
import { deleteLocation } from "cypress/support/apiHelpers/location";
import {
  eventId,
  eventName,
  legalEntityId,
  locationId,
  setupEventTest,
} from "cypress/support/hooks/eventSetupHooks";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";

Before({ tags: "@EMT-3_DeleteExistingEvent" }, setupEventTest);

After({ tags: "@EMT-3_DeleteExistingEvent" }, () => {
  /**
   * @comment Why are you not using your `cleanUpEventTest` function here?
   */
  locationId &&
    deleteLocation(locationId).then(() => {
      legalEntityId && deleteLegalEntity(legalEntityId);
    });
});

When('The user clicks on the "Delete" button', () => {
  EventFormActions.clickDeleteButton();
});

When("The user confirms the deletion", () => {
  CommonAssertions.assertDialogVisible("Are you sure you wish to delete?");
  EventFormActions.clickConfirmDeleteButton();
});

Then('The user should see a snack bar with "Deleted successfully" success message', () => {
  CommonAssertions.assertSnackbarVisible("Deleted successfully");
});

Then("The event should no longer be present in the events table", () => {
  EventFormAssertions.assertEventPresenceInTable({
    eventId: eventId,
    eventName: eventName,
    shouldExist: false,
  });
});
