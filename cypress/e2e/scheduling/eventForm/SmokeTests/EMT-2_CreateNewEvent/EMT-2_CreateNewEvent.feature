@scheduling @eventForm @EMT-2_CreateNewEvent @smokeTest
Feature: EMT-2 Create a new event
    The authorized user should be able to create a new event from the manager tools.

    Scenario: Create a new event with valid details
        Given The user navigates to events grid
        When The user opens the event form
        And The user fills the required fields:
            | Event Name | EMT-2 Event Example |
            | Location   | [location name]     |
        And The user clicks on the "Create" button
        Then The user should see a snack bar with "Event created" success message
        And The new event should be added to the events table
