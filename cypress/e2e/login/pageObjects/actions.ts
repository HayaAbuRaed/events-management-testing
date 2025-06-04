class LoginPageActions {
  static LOCATORS = {
    usernameInput: "#Username",
    passwordInput: "#Password",
    loginButton: "#login",
  };

  private static LOGIN_URL = `${Cypress.env("loginBaseUrl")}${Cypress.env("loginPath")}`;

  static visit() {
    cy.visit(this.LOGIN_URL);
  }

  static fillUsername(username: string) {
    cy.get(this.LOCATORS.usernameInput).clear().type(username);
  }

  static fillPassword(password: string) {
    cy.get(this.LOCATORS.passwordInput).clear().type(password);
  }

  static clickLoginButton() {
    cy.get(this.LOCATORS.loginButton).click();
  }
}

export default LoginPageActions;
