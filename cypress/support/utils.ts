import { format } from "date-fns";
import { EMPTY_GUID } from "./constants";

export const GetServiceStackUrlPrefix = (url: string) => {
  return `${Cypress.env("serviceStack") || ""}${url}`;
};

export const GetNetCoreUrlPrefix = (url: string) => {
  return `${Cypress.env("netCore") || ""}${url}`;
};

export const mainLogin = (username: string, password: string): Cypress.Chainable => {
  return cy
    .request({
      body: {
        UserName: username,
        Password: password,
      },
      method: "POST",
      url: GetServiceStackUrlPrefix("auth/credentials?isFromWeb=true"),
      headers: { Accept: "application/json, text/plain, */*" },
      log: false,
    })
    .then((response) => {
      localStorage.setItem("userInfo", JSON.stringify(response.body));
      cy.request({
        headers: { Accept: "application/json" },
        method: "GET",
        url: GetServiceStackUrlPrefix(`Preferences/${EMPTY_GUID}`),
        failOnStatusCode: false,
        log: false,
      });
      cy.request({
        headers: { Accept: "application/json" },
        method: "GET",
        url: GetServiceStackUrlPrefix(`SessionData/${response.body.SessionId}`),
        failOnStatusCode: false,
        log: false,
      }).then((res) => {
        localStorage.setItem("loggedInUserDetails", JSON.stringify(res.body));
        cy.request({
          method: "GET",
          url: GetNetCoreUrlPrefix(`Permissions/User/${res.body.userId}`),
          failOnStatusCode: false,
          log: false,
        });
      });
      cy.request({
        method: "GET",
        url: GetNetCoreUrlPrefix("User/NavigationPrivileges/v2"),
        log: false,
        failOnStatusCode: false,
      }).then((res) => {
        localStorage.setItem("navigationPrivileges", JSON.stringify(res.body));
      });
    });
};

export const getPrefix = () => {
  const prefix = `EMT-${format(new Date(), "MMddyy-HHmmss")}`;
  return prefix;
};
