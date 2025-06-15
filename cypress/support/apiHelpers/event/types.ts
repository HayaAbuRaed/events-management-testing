/**
 * @comment
 * Is this actually a location?
 * The object returned from the location endpoint is a location and its far more complex.
 *
 * This looks like a generic entity reference object where the id is string.
 *
 * Consider renaming this to `Entity`, or `EntityReference`.
 */
export interface Location {
  id: string;
  name: string;
}

/**
 * @comment I suggest renaming this to something more descriptive.
 * E.g. `Event`.
 */
interface Entity {
  endDateTime: string;
  endTime: string;
  eventType: number;
  id: string;
  location: Location;
  name: string;
  startDate: string;
  startDateTime: string;
  startTime: string;
}

export interface CreateEventRequestBody {
  entity: Entity;
}
