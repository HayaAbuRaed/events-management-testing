import { After, Before, When } from "@badeball/cypress-cucumber-preprocessor";
import CommonAssertions from "cypress/e2e/common/commonAssertions";
import { cleanUpEventTest, eventId, setupEventTest } from "cypress/support/hooks/eventSetupHooks";
import { EVENT_NAME } from "cypress/support/testData/events";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";

const UPDATED_EVENT_NAME = `${EVENT_NAME} Updated`;

Before({ tags: "@EMT-4_UpdateExistingEvent" }, setupEventTest);

After({ tags: "@EMT-4_UpdateExistingEvent" }, cleanUpEventTest);

When("The user updates the event details with valid data", () => {
  EventFormActions.fillEventName(UPDATED_EVENT_NAME);
});

When('The user clicks on the "Save" button', () => {
  EventFormActions.clickSaveButton();
});

When('The user should see a snack bar with "Updated successfully" success message', () => {
  CommonAssertions.assertSnackbarVisible("Updated successfully");
});

When("The updated event should be present in the events table with the new details", () => {
  EventFormAssertions.assertEventPresenceInTable({
    eventId: eventId,
    eventName: UPDATED_EVENT_NAME,
  });
});
