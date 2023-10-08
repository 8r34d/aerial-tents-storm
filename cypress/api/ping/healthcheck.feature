Feature: Ping - HealthCheck

  Scenario: HealthCheck

    Given I request a healthcheck
    Then I should get a healthcheck response 201 "Created"
