class EventFormAssertions {
  static LOCATORS = {
    createEventForm: "createEventForm",
    eventCreatedSnackbar: '[role="alert"]',
    eventsTable: "[role='table']",
  };

  static checkCreateEventFormIsVisible() {
    cy.getByTestId(this.LOCATORS.createEventForm).should("be.visible");
  }

  static checkEventCreatedSnackbar() {
    cy.get(this.LOCATORS.eventCreatedSnackbar).should("be.visible").and("contain", "Created successfully");
  }

  static checkEventIsAddedToTable(eventName: string) {
    cy.get(this.LOCATORS.eventsTable).should("be.visible");
    cy.get(this.LOCATORS.eventsTable).contains(eventName).should("exist");
  }
}

export default EventFormAssertions;
