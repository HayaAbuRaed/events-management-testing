class EventFormActions {
  static LOCATORS = {
    eventNameInput: "nameInputField",
    eventDateInput: "textdatePicker",
    eventLocationSelector: "eventLocationSelector",
    eventTimeInput: "eventTimeInput",
    createButton: "createButton",
  };

  static fillEventName(eventName: string) {
    cy.getByTestId(this.LOCATORS.eventNameInput).type(eventName);
  }

  static fillEventDate(date: string) {
    cy.getByTestId(this.LOCATORS.eventDateInput)
      .invoke("val", date)
      .trigger("input")
      .trigger("change");
  }

  static fillEventLocation(location: string) {
    cy.getByTestId(this.LOCATORS.eventLocationSelector).select(location);
  }

  static fillEventTime(eventTime: string) {
    cy.getByTestId(this.LOCATORS.eventTimeInput).type(eventTime);
  }

  static clickCreateButton() {
    cy.getByTestId(this.LOCATORS.createButton).click();
  }
}

export default EventFormActions;
