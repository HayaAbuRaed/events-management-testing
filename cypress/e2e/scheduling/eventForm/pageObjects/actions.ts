class EventFormActions {
  static LOCATORS = {
    eventNameInput: "nameInputField",
    eventLocationSelector: "locationPicker",
    locationsSearchInput: "locationsDropdown",
    createButton: "createEvent",
    eventTableRow: (eventId: string) => `row${eventId}TableRow`,
    deleteIcon: "DeleteIcon",
    confirmDeleteButton: "deleteButton",
    saveButton: "saveEvent",
  };

  static fillEventName(eventName: string) {
    cy.getByTestId(this.LOCATORS.eventNameInput).clear().type(eventName);
    return this;
  }

  static selectEventLocation(location: string) {
    cy.getByTestId(this.LOCATORS.eventLocationSelector).click();
    cy.getByTestId(this.LOCATORS.locationsSearchInput).type(location);
    cy.getByTestId(`option-${location}`).click();
    return this;
  }

  static clickCreateButton() {
    cy.getByTestId(this.LOCATORS.createButton).click();
    return this;
  }

  static clickEventRow(eventId: string) {
    cy.getByTestId(this.LOCATORS.eventTableRow(eventId)).click();
    return this;
  }

  static clickDeleteButton() {
    cy.getByTestId(this.LOCATORS.deleteIcon).closest("button").click();
    return this;
  }

  static clickConfirmDeleteButton() {
    cy.getByTestId(this.LOCATORS.confirmDeleteButton).click();
    return this;
  }

  static clickSaveButton() {
    cy.getByTestId(this.LOCATORS.saveButton).click();
    return this;
  }
}

export default EventFormActions;
