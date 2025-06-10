class ManagerToolsActions {
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
