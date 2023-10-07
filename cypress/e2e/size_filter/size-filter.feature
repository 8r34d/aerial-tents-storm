Feature:  Size Filter

  Scenario: Filter By XS and Unfilter By XS
    Given I visit the react shopping cart page
    When I filter by "XS"
    Then I should see the message 1 product found
    And I should see 1 product in the product list
    When I unfilter by "XS"
    Then I should see the message 16 products found
    And I should see 16 products in the product list

  Scenario: Filter By S and Unfilter By S
    Given I visit the react shopping cart page
    When I filter by "S"
    Then I should see the message 2 products found
    And I should see 2 products in the product list
    When I unfilter by "S"
    Then I should see the message 16 products found
    And I should see 16 products in the product list

  Scenario: Filter By M and Unfilter By M
    Given I visit the react shopping cart page
    When I filter by "M"
    Then I should see the message 1 product found
    And I should see 1 product in the product list
    When I unfilter by "M"
    Then I should see the message 16 products found
    And I should see 16 products in the product list

  Scenario: Filter By ML and Unfilter By ML
    Given I visit the react shopping cart page
    When I filter by "ML"
    Then I should see the message 2 products found
    And I should see 2 products in the product list
    When I unfilter by "ML"
    Then I should see the message 16 products found
    And I should see 16 products in the product list

  Scenario: Filter By L and Unfilter By L
    Given I visit the react shopping cart page
    When I filter by "L"
    Then I should see the message 10 products found
    And I should see 10 products in the product list
    When I unfilter by "L"
    Then I should see the message 16 products found
    And I should see 16 products in the product list

  Scenario: Filter By XL and Unfilter By XL
    Given I visit the react shopping cart page
    When I filter by "XL"
    Then I should see the message 10 products found
    And I should see 10 products in the product list
    When I unfilter by "XL"
    Then I should see the message 16 products found
    And I should see 16 products in the product list

  Scenario: Filter By XXL and Unfilter By XXL
    Given I visit the react shopping cart page
    When I filter by "XXL"
    Then I should see the message 4 products found
    And I should see 4 products in the product list
    When I unfilter by "XXL"
    Then I should see the message 16 products found
    And I should see 16 products in the product list

# Scenario Outline: Filter By Single Size and Unfilter
# e.g. >> S then << S : update above Scenarios

# Scenario Outline: Filter By Multiple Sizes
# e.g. >> S, M

# Scenario Outline: Filter By Multiple Sizes and Unfilter Single Size
# e.g. >> S, M, L then << S

# Scenario Outline: Filter By Multiple Sizes and Unfilter Multiple Sizes
# e.g. >> S, M, L then << S, M

# Scenario Outline: Filter By Multiple Sizes and Unfilter All
# e.g. >> S, M, L then << S, M, L