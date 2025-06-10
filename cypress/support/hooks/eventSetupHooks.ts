export let eventId: string;
export let eventName: string;
export let locationId: string;
export let legalEntityId: string;

export const setupEventTest = () => {
  return cy.setupTestEvent().then((data) => {
    eventId = data.eventId;
    eventName = data.eventName;
    locationId = data.locationId;
    legalEntityId = data.legalEntityId;
  });
};

export const cleanUpEventTest = () => {
  return cy.cleanupEventTestData({
    eventId: eventId,
    locationId: locationId,
    legalEntityId: legalEntityId,
  });
};
