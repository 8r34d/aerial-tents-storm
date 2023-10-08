Feature: Auth - Create Token

  Scenario: Create Token

    Given I request an auth token as "postCreateToken" with "valid credentials"
    Then I should get an auth token response as "postCreateToken" with 200 "auth"

  Scenario: Create Token - Bad Credentials : User

    Given I request an auth token as "postCreateTokenInvalid" with "invalid user"
    Then I should get an auth token response as "postCreateTokenInvalid" with 200 "bad credentials"

  Scenario: Create Token - Bad Credentials : Password

    Given I request an auth token as "postCreateTokenInvalid" with "invalid password"
    Then I should get an auth token response as "postCreateTokenInvalid" with 200 "bad credentials"
