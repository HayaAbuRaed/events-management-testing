import { EventPresenceOptions } from "./types";

class EventFormAssertions {
  static LOCATORS = {
    createEventForm: "createEventForm",
    eventsTable: "table",
    eventTableRow: (eventId: string) => `row${eventId}TableRow`,
  };

  static checkCreateEventFormIsVisible() {
    cy.getByTestId(this.LOCATORS.createEventForm).should("be.visible");
  }

  static assertEventPresenceInTable({ eventId, eventName, shouldExist = true }: EventPresenceOptions) {
    cy.getByRole(this.LOCATORS.eventsTable).should("be.visible");
    cy.getByTestId(this.LOCATORS.eventTableRow(eventId))
      .contains(eventName)
      .should(shouldExist ? "exist" : "not.exist");
  }
}

export default EventFormAssertions;
