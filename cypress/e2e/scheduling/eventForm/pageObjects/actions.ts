class EventFormActions {
  static LOCATORS = {
    eventNameInput: "nameInputField",
    eventLocationSelector: "locationPicker",
    locationsSearchInput: "locationsDropdown",
    createButton: "createEvent",
    eventTableRow: (eventId: string) => `row${eventId}TableRow`,
    deleteIcon: "DeleteIcon",
    confirmDeleteButton: "deleteButton",
  };

  static fillEventName(eventName: string) {
    cy.getByTestId(this.LOCATORS.eventNameInput).type(eventName);
  }

  static selectEventLocation(location: string) {
    cy.getByTestId(this.LOCATORS.eventLocationSelector).should("be.visible").click();
    cy.getByTestId(this.LOCATORS.locationsSearchInput).type(location);
    cy.getByTestId(`option-${location}`).click();
  }

  static clickCreateButton() {
    cy.getByTestId(this.LOCATORS.createButton).click();
  }

  static clickEventRow(eventId: string) {
    cy.getByTestId(this.LOCATORS.eventTableRow(eventId)).click();
  }

  static clickDeleteButton() {
    cy.getByTestId(this.LOCATORS.deleteIcon).closest("button").click();
  }

  static clickConfirmDeleteButton() {
    cy.getByTestId(this.LOCATORS.confirmDeleteButton).click();
  }
}

export default EventFormActions;
