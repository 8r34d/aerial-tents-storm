Feature:  Size Filter

  Scenario: Filter By XS
    Given I visit the react shopping cart page
    When I filter by "XS"
    Then I should see the message 1 product found
    And I should see 1 product in the product list

  Scenario: Filter By S
    Given I visit the react shopping cart page
    When I filter by "S"
    Then I should see the message 2 products found
    And I should see 2 products in the product list

  Scenario: Filter By M
    Given I visit the react shopping cart page
    When I filter by "M"
    Then I should see the message 1 product found
    And I should see 1 product in the product list

  Scenario: Filter By ML
    Given I visit the react shopping cart page
    When I filter by "ML"
    Then I should see the message 2 products found
    And I should see 2 products in the product list

  Scenario: Filter By L
    Given I visit the react shopping cart page
    When I filter by "L"
    Then I should see the message 10 products found
    And I should see 10 products in the product list

  Scenario: Filter By XL
    Given I visit the react shopping cart page
    When I filter by "XL"
    Then I should see the message 10 products found
    And I should see 10 products in the product list

  Scenario: Filter By XXL
    Given I visit the react shopping cart page
    When I filter by "XXL"
    Then I should see the message 4 products found
    And I should see 4 products in the product list