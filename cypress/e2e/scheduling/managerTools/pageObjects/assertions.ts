class ManagerToolsAssertions {
  static checkEventFormModalIsOpen() {
    cy.getByRole("dialog").should("be.visible");
  }
}

export default ManagerToolsAssertions;
