Feature: Listing Feature

  Scenario: Default Listing

    Given I visit the listing page
    When I view the listing page
    Then I should see products found is 16
