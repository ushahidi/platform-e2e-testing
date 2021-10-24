Feature: Users Actions

    Scenario: Perform actions on users
        Given Login to the application
        When I navigate to Users page
        Then I can create a Member User
        Then I can delete a User
        Then I can sort Users
