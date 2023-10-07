Feature: Listing Feature

  Scenario: Default Listing

    Given I visit the listing page
    When I view the listing page
    Then I should see 16 products found
    And I should see 16 items in the list
