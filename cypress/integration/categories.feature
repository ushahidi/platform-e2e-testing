Feature: Categories

    Scenario: Categories Actions
        Given Login to the application
        When I navigate to Categories page
        Then I can create a Category
        Then Verify created Category exists
        Then I can delete a Category
        Then Verify deleted Category does not exist