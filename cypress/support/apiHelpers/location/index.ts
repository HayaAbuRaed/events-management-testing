import { GetServiceStackUrlPrefix } from "cypress/support/utils";
import { getToBeCreatedLocation } from "./data";

export const createLocation = (legalEntityId: string) => {
  const payload = getToBeCreatedLocation(legalEntityId);

  /**
   * @comment returned response must be typed.
   */
  return cy.request("POST", GetServiceStackUrlPrefix("Locations"), payload).then((res) => {
    /**
     * @comment function must be a single responsibility.
     *
     * Problematic scenario: I want to call the create location endpoint but I expect a 400 response.
     * In this case, the test will fail because the response is not 200.
     * Solution: Use the `failOnStatusCode` option in the request to handle different status codes gracefully.
     */
    expect(res.status).to.eq(200);
    return res.body.model;
  });
};

export const deleteLocation = (locationId: string) => {
  return cy.request({
    method: "DELETE",
    url: `${GetServiceStackUrlPrefix("Locations/${locationId}")}`,
  });
};
