export interface EventDetails {
  name: string;
  date: string;
  location: string;
  startTime: string;
  endTime: string;
}

export interface EventPresenceOptions {
  eventName: string;
  shouldExist?: boolean;
}
