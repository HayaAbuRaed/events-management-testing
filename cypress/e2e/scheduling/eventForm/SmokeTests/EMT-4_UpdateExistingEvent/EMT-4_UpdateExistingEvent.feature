@scheduling @eventForm @EMT-4_UpdateExistingEvent @smokeTest
Feature: EMT-4 Update Existing Event
    The authorized user should be able to update an existing event.

    Scenario: Update an existing event
        Given The user navigates to events grid
        When The user clicks on an existing event record
        And The user updates the event details with valid data
        And The user clicks on the "Save" button
        Then The user should see a snack bar with "Updated successfully" success message
        And The updated event should be present in the events table with the new details