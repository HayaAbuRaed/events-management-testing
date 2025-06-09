class ClassicHomeActions {
  static LOCATORS = {
    pagesSelectorGroup: "leftPanelSelectedGroup",
    groupsList: "ul.k-list.k-reset",
    smartOperationsListItem: "smartOperationsListItem",
  };

  static navigateToSmartOperations() {
    // Because the smart operations page is opened in a new tab,
    // we need to override the default behavior of window.open
    cy.window().then((win) => {
      cy.stub(win, "open").callsFake((url) => {
        win.location.href = url;
      });
    });

    cy.getByTestId(this.LOCATORS.pagesSelectorGroup).click();
    cy.get(this.LOCATORS.groupsList).find("li").contains("Smart Operations").click();
  }
}

export default ClassicHomeActions;
