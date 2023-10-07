Feature: Product List

  Scenario: Default Product List

    Given I visit the react shopping cart page
    When I view the react shopping cart page
    Then I should see the message 16 products found
    And I should see 16 products in the product list
