class EventFormAssertions {
  static LOCATORS = {
    createEventForm: "createEventForm",
    eventCreatedSnackbar: "alert",
    eventsTable: "table",
    dialog: "dialog",
    eventTableRow: (eventId: string) => `row${eventId}TableRow`,
  };

  static checkCreateEventFormIsVisible() {
    cy.getByTestId(this.LOCATORS.createEventForm).should("be.visible");
  }

  static checkEventCreatedSnackbar() {
    cy.getByRole(this.LOCATORS.eventCreatedSnackbar)
      .should("be.visible")
      .and("contain", "Created successfully");
  }

  static checkEventIsAddedToTable(eventName: string) {
    cy.getByRole(this.LOCATORS.eventsTable).should("be.visible");
    cy.getByRole(this.LOCATORS.eventsTable).contains(eventName).should("exist");
  }

  static checkIsDeletionConfirmationDialogVisible() {
    cy.getByRole(this.LOCATORS.dialog)
      .should("be.visible")
      .contains("Are you sure you wish to delete?")
      .should("exist");
  }

  static checkEventDeletedSnackbar() {
    cy.getByRole(this.LOCATORS.eventCreatedSnackbar)
      .should("be.visible")
      .and("contain", "Deleted successfully");
  }

  static checkEventIsNotInTable(eventId: string) {
    cy.getByRole(this.LOCATORS.eventsTable).should("be.visible");
    cy.getByTestId(this.LOCATORS.eventTableRow(eventId)).should("not.exist");
  }

  static checkEventUpdatedSnackbar() {
    cy.getByRole(this.LOCATORS.eventCreatedSnackbar)
      .should("be.visible")
      .and("contain", "Updated successfully");
  }
}

export default EventFormAssertions;
