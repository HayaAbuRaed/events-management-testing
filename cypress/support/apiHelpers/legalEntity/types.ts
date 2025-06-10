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
  shippingPreferences: "UspsPriority";
  masterTax: {
    naicsCode: number | null;
  };
}

export interface LegalEntityRequest {
  userId: string;
  legalEntity: LegalEntity;
}

export interface Intercompany {
  dueFromAccount: string;
  dueToAccount: string;
}
