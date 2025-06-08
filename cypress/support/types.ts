export interface Credentials {
  username: string;
  password: string;
}

export interface LocationSetupData {
  createdLegalEntityId: string;
  createdLocationId: string;
  createdLocationName: string;
}

export interface LocationCleanupData {
  legalEntityId: string;
  locationId: string;
}
