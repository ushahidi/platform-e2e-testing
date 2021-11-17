Feature: Data View

Scenario: Confirm data view is intact
    Given Login to the application
    When I navigate to data view page
    Then I should see data view information
