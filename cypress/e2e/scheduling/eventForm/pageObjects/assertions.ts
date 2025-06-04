class EventFormAssertions {
  static LOCATORS = {
    createEventForm: "createEventForm",
    eventNameInput: "eventNameInput",
    eventDateInput: "eventDateInput",
    eventTimeInput: "eventTimeInput",
    saveButton: "saveButton",
  };

  static checkCreateEventFormIsVisible() {
    cy.getByTestId(this.LOCATORS.createEventForm).should("be.visible");
  }
}

export default EventFormAssertions;
