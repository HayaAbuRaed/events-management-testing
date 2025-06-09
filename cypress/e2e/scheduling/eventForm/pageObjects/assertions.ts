class EventFormAssertions {
  static LOCATORS = {
    createEventForm: "createEventForm",
    eventCreatedSnackbar: "[role='alert']",
    eventsTable: "[role='table']",
    dialog: "[role='dialog']",
    eventTableRow: (eventId: string) => `row${eventId}TableRow`,
  };

  static checkCreateEventFormIsVisible() {
    cy.getByTestId(this.LOCATORS.createEventForm).should("be.visible");
  }

  static checkEventCreatedSnackbar() {
    cy.get(this.LOCATORS.eventCreatedSnackbar)
      .should("be.visible")
      .and("contain", "Created successfully");
  }

  static checkEventIsAddedToTable(eventName: string) {
    cy.get(this.LOCATORS.eventsTable).should("be.visible");
    cy.get(this.LOCATORS.eventsTable).contains(eventName).should("exist");
  }

  static checkIsDeletionConfirmationDialogVisible() {
    cy.get(this.LOCATORS.dialog)
      .should("be.visible")
      .contains("Are you sure you wish to delete?")
      .should("exist");
  }

  static checkEventDeletedSnackbar() {
    cy.get(this.LOCATORS.eventCreatedSnackbar)
      .should("be.visible")
      .and("contain", "Deleted successfully");
  }

  static checkEventIsNotInTable(eventId: string) {
    cy.get(this.LOCATORS.eventsTable).should("be.visible");
    cy.getByTestId(this.LOCATORS.eventTableRow(eventId)).should("not.exist");
  }
}

export default EventFormAssertions;
