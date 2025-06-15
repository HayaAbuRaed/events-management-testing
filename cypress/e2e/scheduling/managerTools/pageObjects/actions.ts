class ManagerToolsActions {
  /**
   * @comment One of the points of using the class structure is to encapsulate details that are not relevant to the outside.
   * Consider marking this as private or moving it outside the class definition.
   */
  static LOCATORS = {
    eventsTab: "eventsTab",
    createButton: "noxCreateButton",
    createEventListItem: "3",
  };

  static clickOnEventsTab() {
    cy.getByTestId(this.LOCATORS.eventsTab).click();
    return this;
  }

  static clickOnCreateButton() {
    cy.getByTestId(this.LOCATORS.createButton).click();
    return this;
  }

  static clickOnCreateEventListItem() {
    cy.getByTestId(this.LOCATORS.createEventListItem).contains("Event").click();
    return this;
  }
}

export default ManagerToolsActions;
