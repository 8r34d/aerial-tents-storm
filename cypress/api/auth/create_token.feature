Feature: Auth - Create Token

  Scenario: Create Token

    Given I request an auth token as "postCreateToken"
    Then I should get an auth token response as "postCreateToken" with 200 "auth"
