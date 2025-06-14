import { GetServiceStackUrlPrefix } from "cypress/support/utils";
import { getToBeCreatedLegalEntity } from "./data";
import { Intercompany } from "./types";

export const createLegalEntity = (intercompany: Intercompany) => {
  const legalEntity = getToBeCreatedLegalEntity(
    intercompany.dueFromAccount,
    intercompany.dueToAccount
  );

  /**
   * @comment returned response must be typed.
   */
  return cy
    .request({
      method: "POST",
      url: GetServiceStackUrlPrefix("LegalEntities"),
      body: legalEntity,
    })
    .then((res) => {
      /**
       * @comment function must be a single responsibility. Avoid mixing data retrieval and assertions.
       */
      expect(res.status).to.eq(200);
      return res.body.model;
    });
};

export const deleteLegalEntity = (legalEntityId: string) => {
  return cy.request({
    method: "DELETE",
    url: `${GetServiceStackUrlPrefix("LegalEntities")}/${legalEntityId}`,
  });
};
