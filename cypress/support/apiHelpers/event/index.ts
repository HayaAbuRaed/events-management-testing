import { Location } from "./types";
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
      /**
       * @comment avoid implementing non-optional assertions inside data utility function.
       *
       * Ideally, your function should ideally be a single responsibility.
       * This responsibility of performing this assertion should be propagated to the caller.
       */
      expect(res.status).to.eq(200);
    });
};

export const createEvent = (location: Location) => {
  const eventPayload = getToBeCreatedEvent(location);

  /**
   * @comment response body should be typed.
   */
  return cy
    .request({
      method: "POST",
      url: `${GetNetCoreUrlPrefix("Event")}/CreateEvent`,
      body: eventPayload,
    })
    .then((res) => {
      /**
       * @comment avoid implementing non-optional assertions inside data utility function.
       *
       * Ideally, your function should ideally be a single responsibility.
       * This responsibility of performing this assertion should be propagated to the caller.
       */
      expect(res.status).to.eq(200);
      return res.body.event;
    });
};
