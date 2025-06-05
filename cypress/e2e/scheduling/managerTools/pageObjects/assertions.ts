class ManagerToolsAssertions {
  static checkEventFormModalIsOpen() {
    cy.get('[role="dialog"]').should("be.visible");
  }
}

export default ManagerToolsAssertions;
