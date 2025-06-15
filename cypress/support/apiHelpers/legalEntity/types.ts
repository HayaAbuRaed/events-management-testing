import { Address } from "cypress/support/types";

export interface LegalEntity {
  DefaultPayrollCheckAccount: string | null;
  Id: string;
  IsBillingDifferent: boolean;
  IsStandaloneScheduling: boolean;
  PayrollCommonPayorId: string | null;
  ReportTaxForm1099To: string | null;
  Addresses: Address[];
  bankAccountId: string | null;
  dm_DueFromAccount: string;
  dm_DueToAccount: string;
  dm_Number: string;
  dm_defaultCheckingAccount: string | null;
  dm_name: string;
  enabled: boolean;
  /**
   * @comment whey are we hardcoding `UspsPriority` as a type?
   *
   * This should ideally by an enum. If don't know the possible values,
   * but you still need to define that property, consider typing this as plain string or unknown.
   */
  shippingPreferences: "UspsPriority";
  masterTax: {
    naicsCode: number | null;
  };
}

/**
 * @comment
 * Consider using a more descriptive name for this interface.
 *
 * Please note that that this does not represent a legal entity request, but rather a request body.
 * Those are two distinct concepts.
 *
 * All things considered, I suggest renaming this to something that more clearly reflects its purpose.
 * E.g. `CreateLegalEntityRequestBody`.
 */
export interface LegalEntityRequest {
  userId: string;
  legalEntity: LegalEntity;
}

/**
 * @comment
 * What does intercompany mean in this context?
 * I find this name a little confusing.
 * How about `CreateLegalEntityOptions`?
 */
export interface Intercompany {
  dueFromAccount: string;
  dueToAccount: string;
}
