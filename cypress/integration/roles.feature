Feature: Roles Functions

Scenario: Create Role
    Given Login to the application
    When I navigate to Roles page
    Then I can create a new role
    Then I can verify created role exists 