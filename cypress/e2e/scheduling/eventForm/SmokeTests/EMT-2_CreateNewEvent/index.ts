import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import ManagerToolsActions from "cypress/e2e/scheduling/managerTools/pageObjects/actions";
import ManagerToolsAssertions from "cypress/e2e/scheduling/managerTools/pageObjects/assertions";
import EventFormActions from "../../pageObjects/actions";
import EventFormAssertions from "../../pageObjects/assertions";

Given("User with full access and permissions is logged in", () => {
  cy.loginWithApi();
});

When("The user navigates to events grid", () => {
  cy.visit("/react/in-store-experience/scheduler-tools?activeSchedulerTools=Events");
  cy.pause();
});

When("The user opens the event form", () => {
    ManagerToolsActions.clickOnCreateButton();
    ManagerToolsActions.clickOnCreateEventListItem();
    // cy.pause();
    ManagerToolsAssertions.checkEventFormModalIsOpen();
});

When("The user fills the required fields with valid data", () => {
    EventFormActions.fillEventName("EMT-2 Event Example");
    EventFormActions.selectEventLocation("FVGH");
})

When("The user clicks on the \"Create\" button", () => {
    EventFormActions.clickCreateButton();
    // cy.pause();
});

When("The user should see a snack bar with \"Event created\" success message", () => {
    EventFormAssertions.checkEventCreatedSnackbar();
});

When("The new event should be added to the events table", () => {
    EventFormAssertions.checkEventIsAddedToTable("EMT-2 Event Example");
});
