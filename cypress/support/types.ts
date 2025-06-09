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
  locationId: string;
  legalEntityId: string;
}
