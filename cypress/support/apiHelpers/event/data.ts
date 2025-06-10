import { format } from "date-fns/format";
import { CreateEventRequestBody } from "./types";
import { add } from "date-fns";
import { EMPTY_GUID } from "cypress/support/constants";
import { getPrefix } from "cypress/support/utils";
import { Location } from "./types";

export const getToBeCreatedEvent = (location: Location): CreateEventRequestBody => {
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
      location: location,
      name: `${getPrefix()} Event`,
      startDate: startDateTime,
      startDateTime,
      startTime,
    },
  };
};
