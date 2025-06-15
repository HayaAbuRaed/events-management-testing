/**
 * @comment unused import
 */
import { eventId } from "cypress/support/hooks/eventSetupHooks";

/**
 * @comment this is not used.
 * @comment this looks like a subset of the entity object defined inside
 * `cypress/support/apiHelpers/event/types.ts`. Ideally, you can reuse that type
 * or define a subset with the help of the TypeScript utility type `Pick`.
 */
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
