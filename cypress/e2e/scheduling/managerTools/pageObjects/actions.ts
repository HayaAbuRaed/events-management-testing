class ManagerToolsActions {
  static LOCATORS = {
    eventsTab: "eventsTab",
    createButton: "noxCreateButton",
    createEventListItem: "3",
  };

  static clickOnEventsTab() {
    cy.getByTestId(this.LOCATORS.eventsTab).click();
  }

  static clickOnCreateButton() {
    cy.getByTestId(this.LOCATORS.createButton).click();
  }

  static clickOnCreateEventListItem() {
    cy.getByTestId(this.LOCATORS.createEventListItem).should("be.visible").contains("Event").click();
  }
}

export default ManagerToolsActions;
