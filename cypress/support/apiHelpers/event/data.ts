import { format } from "date-fns/format";
import { CreateEventRequestBody } from "./types";
import { add } from "date-fns";
import { EMPTY_GUID } from "cypress/support/constants";
import { getPrefix } from "cypress/support/utils";

export const getToBeCreatedEvent = (): CreateEventRequestBody => {
  const currentDateTime = new Date();
  const startDateTime = format(currentDateTime, "yyyy-MM-dd'T'HH:mm:ssXXX");
  const endDateTime = format(add(currentDateTime, { hours: 5 }), "yyyy-MM-dd'T'HH:mm:ssXXX");
  const startTime = format(currentDateTime, "HH:mm:ss");
  const endTime = format(add(currentDateTime, { hours: 5 }), "HH:mm:ss");

  return {
    entity: {
      endDateTime,
      endTime,
      eventType: 2,
      id: EMPTY_GUID,
      location: { id: "4fdbe783-6ed3-4ecf-a7f5-7e01619dedc0", name: "Comida Test" },
      name: `${getPrefix()} Event${Math.floor(Math.random() * 1000)}`,
      startDate: startDateTime,
      startDateTime,
      startTime,
    },
  };
};
