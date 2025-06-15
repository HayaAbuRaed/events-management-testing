import { EventPresenceOptions } from "./types";

class EventFormAssertions {
  /**
   * @comment One of the points of using the class structure is to encapsulate details that are not relevant to the outside.
   * Consider marking this as private or moving it outside the class definition.
   */
  static LOCATORS = {
    createEventForm: "createEventForm",
    eventsTable: "table",
    eventTableRow: (eventId: string) => `row${eventId}TableRow`,
    eventNameCell: (eventId: string) => `row${eventId}columnnameTableCell`,
  };

  static checkCreateEventFormIsVisible() {
    cy.getByTestId(this.LOCATORS.createEventForm).should("be.visible");
  }

  static assertEventPresenceInTable({
    eventId,
    eventName,
    shouldExist = true,
  }: EventPresenceOptions) {
    cy.getByRole(this.LOCATORS.eventsTable).should("be.visible");
    cy.getByTestId(this.LOCATORS.eventTableRow(eventId)).should(
      shouldExist ? "exist" : "not.exist"
    );

    if (shouldExist) {
      cy.getByTestId(this.LOCATORS.eventNameCell(eventId))
        .should("contain.text", eventName)
        .and("be.visible");
    }
  }
}

export default EventFormAssertions;
