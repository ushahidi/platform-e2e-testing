Feature: Login

Scenario: Login with valid credentials
    Given Login to the application
    When Enter valid credentials
    Then click Login
    And See the homepage