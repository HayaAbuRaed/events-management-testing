import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ManagerToolsActions from "cypress/e2e/scheduling/managerTools/pageObjects/actions";
import ManagerToolsAssertions from "cypress/e2e/scheduling/managerTools/pageObjects/assertions";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";
import { EVENT_NAME } from "cypress/support/testData/events";
import { LocationSetupData } from "cypress/support/types";
import { SetupData } from "./types";

let setupData: SetupData;

before(() => {
  cy.setupTestLocation().then((data: LocationSetupData) => {
    setupData = data;
  });
});

Given("The user navigates to events grid", () => {
  cy.visit("/react/in-store-experience/scheduler-tools?activeSchedulerTools=Events");
  cy.pause();
});

When("The user opens the event form", () => {
  ManagerToolsActions.clickOnCreateButton();
  ManagerToolsActions.clickOnCreateEventListItem();
  ManagerToolsAssertions.checkEventFormModalIsOpen();
});

When("The user fills the required fields:", () => {
  EventFormActions.fillEventName(EVENT_NAME);
  EventFormActions.selectEventLocation(setupData.createdLocationName);
});

When('The user clicks on the "Create" button', () => {
  EventFormActions.clickCreateButton();
});

Then('The user should see a snack bar with "Event created" success message', () => {
  EventFormAssertions.checkEventCreatedSnackbar();
});

Then("The new event should be added to the events table", () => {
  EventFormAssertions.checkEventIsAddedToTable(EVENT_NAME);
});

after(() =>
  cy.cleanupTestLocation({
    locationId: setupData.createdLocationId,
    legalEntityId: setupData.createdLegalEntityId,
  })
);
