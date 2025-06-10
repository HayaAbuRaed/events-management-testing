class CommonAssertions {
  static assertSnackbarVisible(content: string) {
    cy.getByRole("alert").should("be.visible").and("contain", content);
  }

  static assertDialogVisible(content: string) {
    cy.getByRole("dialog").should("be.visible").contains(content);
  }
}

export default CommonAssertions;