import { GetNetCoreUrlPrefix } from "cypress/support/utils";

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
