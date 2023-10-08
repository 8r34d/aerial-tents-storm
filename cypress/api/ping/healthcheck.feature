Feature: Ping - HealthCheck

  Scenario: HealthCheck

    Given I request a healthcheck as "getHealthcheck"
    Then I should get a response as "getHealthcheck" with 201 "Created"
