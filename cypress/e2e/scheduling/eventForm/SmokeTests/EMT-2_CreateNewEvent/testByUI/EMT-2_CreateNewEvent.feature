@scheduling @eventForm @EMT-2_CreateNewEvent @smoke
Feature: Create a New Event 
    Manager should be able to create a new event with valid details

    Scenario: Create a new event with valid details
        Given User is logged in
        When User navigates to the "Smart Operations" page
        And User navigates to the "Manager Tools" section
        And User navigates to the "Events" panel
        And User clicks on the "Create" button
        And User chooses "Event" from the dropdown
        And User should see the "Create Event" form
        # And I fill in the event details with valid information
        #     | Event Name       | Eid                              |
        #     | Date             | 2025-6-5                         |
        #     | Location         | "the one I will create with api" |
        #     | Start Time       | 8:00 AM                          |
        #     | End Time         | 11:59 PM                         |
        # And I click on the "Create" button
        # Then I should see a success message "Event created successfully"
        # And the new event should be listed in the events grid    