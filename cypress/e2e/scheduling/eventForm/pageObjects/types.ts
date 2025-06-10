import { eventId } from 'cypress/support/hooks/eventSetupHooks';
export interface EventDetails {
  name: string;
  date: string;
  location: string;
  startTime: string;
  endTime: string;
}

export interface EventPresenceOptions {
  eventId: string;
  eventName: string;
  shouldExist?: boolean;
}
