Feature: Submit Surveys

    Scenario: Submit a response to a survey
        When I launch application as unauthorised user
        When I navigate to Survey
        Then I try to submit with missing required fields
        Then I submit a response to a Survey