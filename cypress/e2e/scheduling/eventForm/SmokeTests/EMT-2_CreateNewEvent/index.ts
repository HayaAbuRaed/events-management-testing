import { After, Before, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ManagerToolsActions from "cypress/e2e/scheduling/managerTools/pageObjects/actions";
import ManagerToolsAssertions from "cypress/e2e/scheduling/managerTools/pageObjects/assertions";
import { EVENT_NAME } from "cypress/support/testData/events";
import { LocationSetupData } from "cypress/support/types";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";
import { SetupData } from "./types";

let setupData: SetupData;
let createdEventId: string;

Before({ tags: "@EMT-2_CreateNewEvent" }, () => {
  cy.setupTestLocation().then((data: LocationSetupData) => {
    setupData = data;
  });
});

beforeEach(() => {
  cy.intercept("POST", "/NetCore/Event/CreateEvent").as("createdEvent");
});

When("The user opens the event form", () => {
  ManagerToolsActions.clickOnCreateButton().clickOnCreateEventListItem();
  ManagerToolsAssertions.checkEventFormModalIsOpen();
});

When("The user fills the required fields:", () => {
  EventFormActions.fillEventName(EVENT_NAME).selectEventLocation(setupData.createdLocationName);
});

When('The user clicks on the "Create" button', () => {
  EventFormActions.clickCreateButton();

  cy.wait("@createdEvent").then((interception) => {
    expect(interception.response?.statusCode).to.eq(200);
    createdEventId = interception.response?.body?.event?.id;
  });
});

Then('The user should see a snack bar with "Event created" success message', () => {
  EventFormAssertions.checkEventCreatedSnackbar();
});

Then("The new event should be added to the events table", () => {
  Cypress.log({
    name: "Check Event Interception",
    message: `Checking if event with ID "${createdEventId}" is intercepted`,
  });
  EventFormAssertions.assertEventPresenceInTable({ eventName: EVENT_NAME });
});

After({ tags: "@EMT-2_CreateNewEvent" }, () =>
  cy.cleanupEventTestData({
    eventId: createdEventId,
    locationId: setupData.createdLocationId,
    legalEntityId: setupData.createdLegalEntityId,
  })
);
