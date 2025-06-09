export interface Location {
  id: string;
  name: string;
}

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
