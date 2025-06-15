/**
 * @comment
 * I don't believe these variables should be exported.
 *
 * In fact, I don't think they should exist.
 *
 * This makes your code less modular, less predictable, and more prone to errors.
 *
 * Consider propagating the responsibility of maintaining these values to the caller.
 */
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
