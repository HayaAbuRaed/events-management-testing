export interface Credentials {
  username: string;
  password: string;
}

export interface LocationSetupData {
  createdLegalEntityId: string;
  createdLocationId: string;
  createdLocationName: string;
}

export interface EventCleanupData {
  eventId: string;
  legalEntityId: string;
  locationId: string;
}

export interface EventSetupData {
  eventId: string;
  eventName: string;
  locationId: string;
  legalEntityId: string;
}

export interface Address {
  Address1: string;
  Address2: string | null;
  /**
   * @comment Should be a detailed enum or a string literal type.
   */
  AddressType: "Shipping";
  City: string;
  Country: string;
  CountryName: string;
  IsVerified: boolean;
  Latitude: number | null;
  Longitude: number | null;
  PostalCode: string;
  State: string;
}

export type Option = Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow;
