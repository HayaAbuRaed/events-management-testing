export const assertSnackbarVisible = (content: string) => {
  cy.getByRole("alert").should("be.visible").and("contain", content);
};
