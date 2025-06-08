import { GetServiceStackUrlPrefix } from "cypress/support/utils";
import { getToBeCreatedLocation } from "./data";

export const createLocation = (legalEntityId: string) => {
  const payload = getToBeCreatedLocation(legalEntityId);
  //   cy.log("Location create payload:", JSON.stringify(payload));

  return cy.request("POST", GetServiceStackUrlPrefix("Locations"), payload).then((res) => {
    expect(res.status).to.eq(200);
    return res.body.model;
  });
};

export const deleteLocation = (locationId: string) => {
  return cy.request({
    method: "DELETE",
    url: `${GetServiceStackUrlPrefix("Locations")}/${locationId}`,
  });
};
