import { GetNetCoreUrlPrefix } from "cypress/support/utils";
import { getToBeCreatedEvent } from "./data";

export const deleteEvent = (eventId: string) => {
  return cy
    .request({
      method: "POST",
      url: `${GetNetCoreUrlPrefix("Event")}/DeleteEvent`,
      body: {
        id: eventId,
      },
    })
    .then((res) => {
      expect(res.status).to.eq(200);
    });
};

export const createEvent = () => {
  const eventPayload = getToBeCreatedEvent();
  cy.log("Event Payload:", JSON.stringify(eventPayload)); 
  return cy
    .request({
      method: "POST",
      url: `${GetNetCoreUrlPrefix("Event")}/CreateEvent`,
      body: eventPayload,
    })
    .then((res) => {
      expect(res.status).to.eq(200);
      return res.body.event;
    });
};
