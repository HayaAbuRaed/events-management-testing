Feature: EMT-3 Delete Existing Event
    The authorized user should be able to delete an existing event.

    Scenario: Delete an existing event
        Given The user navigates to events tab
        When The user selects an existing event
        And The user clicks on the "Delete" button
        And The user confirms the deletion
        Then The user should see a snack bar with "Deleted successfully" success message
        And The event should no longer be present in the events table

