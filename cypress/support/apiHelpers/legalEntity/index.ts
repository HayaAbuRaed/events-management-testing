import { GetServiceStackUrlPrefix } from "cypress/support/utils";
import { getToBeCreatedLegalEntity } from "./data";
import { Intercompany } from "./types";

export const createLegalEntity = (intercompany: Intercompany) => {
  const legalEntity = getToBeCreatedLegalEntity(
    intercompany.dueFromAccount,
    intercompany.dueToAccount
  );

  return cy
    .request({
      method: "POST",
      url: GetServiceStackUrlPrefix("LegalEntities"),
      body: legalEntity,
    })
    .then((res) => {
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
