import { EMPTY_GUID } from "cypress/support/constants";
import { getPrefix } from "cypress/support/utils";
import { LegalEntityRequest } from "./types";

export const getToBeCreatedLegalEntity = (
  dueFromAccount: string,
  dueToAccount: string
): LegalEntityRequest => ({
  legalEntity: {
    DefaultPayrollCheckAccount: null,
    Id: EMPTY_GUID,
    IsBillingDifferent: false,
    IsStandaloneScheduling: false,
    PayrollCommonPayorId: null,
    ReportTaxForm1099To: null,
    Addresses: [
      {
        Address1: "210 Walnut St",
        Address2: "Room#215",
        AddressType: "Shipping",
        City: "Des Moines",
        Country: "US",
        CountryName: "United States",
        IsVerified: false,
        Latitude: null,
        Longitude: null,
        PostalCode: "50302",
        State: "IA",
      },
    ],
    bankAccountId: null,
    dm_DueFromAccount: dueFromAccount,
    dm_DueToAccount: dueToAccount,
    dm_Number: getPrefix(),
    dm_defaultCheckingAccount: null,
    dm_name: `${getPrefix()} Legal Entity`,
    enabled: false,
    shippingPreferences: "UspsPriority",
    masterTax: {
      naicsCode: null,
    },
  },
  userId: Cypress.env("DEFAULT_USER_ID"),
});
