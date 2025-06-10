@scheduling @eventForm @EMT-3_DeleteExistingEvent @smokeTest
Feature: EMT-3 Delete Existing Event
    The authorized user should be able to delete an existing event.

    Scenario: Delete an existing event
        Given The user navigates to events grid
        When The user clicks on an existing event record
        And The user clicks on the "Delete" button
        And The user confirms the deletion
        Then The user should see a snack bar with "Deleted successfully" success message
        And The event should no longer be present in the events table
