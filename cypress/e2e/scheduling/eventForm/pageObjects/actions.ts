class EventFormActions {
  /**
   * @comment One of the points of using the class structure is to encapsulate details that are not relevant to the outside.
   * Consider marking this as private or moving it outside the class definition.
   */
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

  /**
   * @comment Use accurate parameter names, don't leave room for ambiguity.
   * By location, do you mean location name or location ID?
   */
  static selectEventLocation(location: string) {
    cy.getByTestId(this.LOCATORS.eventLocationSelector).click();
    cy.getByTestId(this.LOCATORS.locationsSearchInput).type(location);
    cy.getByTestId(`option-${location}`).click();
    return this;
  }

  /**
   * @comment please avoid `any` when typing the response.
   */
  static clickCreateButton(onSuccess?: (response: any) => void) {
    /**
     * @comment This is a post request. Which means you're creating a new event.
     * Your alias should more accurately reflect that. Consider renaming it to `createEvent`.
     * Using the past tense would imply you're retrieving an event, not creating one.
     */
    cy.intercept("POST", "/NetCore/Event/CreateEvent").as("createdEvent");

    cy.getByTestId(this.LOCATORS.createButton).click();

    cy.wait("@createdEvent").then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);

      /**
       * @nit
       * @comment shorter form:
       * ```ts
       * interceptions.response && onSuccess?.(interception.response);
       * ```
       */
      if (onSuccess && interception.response) {
        onSuccess(interception.response);
      }
    });

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
