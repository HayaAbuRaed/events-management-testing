class SmartOperationsHomeActions {
  static LOCATORS = {
    laborNavItem: "LaborNavItem",
    managerNavItem: "ManagerToolsNavItem",
  };

  static navigateToManagerTools() {
    cy.getByTestId(this.LOCATORS.laborNavItem).click();
    cy.contains("Manager Tools").should("be.visible");
    cy.getByTestId(this.LOCATORS.managerNavItem).click();
  }
}

export default SmartOperationsHomeActions;
