class EventFormActions {
  static LOCATORS = {
    eventNameInput: "nameInputField",
    eventLocationSelector: "locationPicker",
    locationsSearchInput: "locationsDropdown",
    createButton: "createEvent",
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
}

export default EventFormActions;
