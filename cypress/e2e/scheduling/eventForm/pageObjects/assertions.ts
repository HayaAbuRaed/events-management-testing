import { EventPresenceOptions } from "./types";

class EventFormAssertions {
  static LOCATORS = {
    createEventForm: "createEventForm",
    eventsTable: "table",
    dialog: "dialog",
    eventTableRow: (eventId: string) => `row${eventId}TableRow`,
  };

  static checkCreateEventFormIsVisible() {
    cy.getByTestId(this.LOCATORS.createEventForm).should("be.visible");
  }

  static assertEventPresenceInTable({ eventName, shouldExist = true }: EventPresenceOptions) {
    cy.getByRole(this.LOCATORS.eventsTable).should("be.visible");
    cy.getByRole(this.LOCATORS.eventsTable)
      .contains(eventName)
      .should(shouldExist ? "exist" : "not.exist");
  }
}

export default EventFormAssertions;
