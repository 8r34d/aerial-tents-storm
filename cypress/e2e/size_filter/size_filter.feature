Feature:  Size Filter

  Scenario Outline: Filter By <FilterSize> and Unfilter By <UnfilterSize>
    Given I visit the react shopping cart page
    When I filter by <FilterSize>
    Then I should see the message <FilterProducts> product found
    And I should see <FilterProducts> product in the product list
    When I unfilter by <UnfilterSize>
    Then I should see the message <UnfilterProducts> products found
    And I should see <UnfilterProducts> products in the product list

    Examples:
      | FilterSize | FilterProducts | UnfilterSize | UnfilterProducts |
      | "XS"       | 1              | "XS"         | 16               |
      | "S"        | 2              | "S"          | 16               |
      | "M"        | 1              | "M"          | 16               |
      | "ML"       | 2              | "ML"         | 16               |
      | "L"        | 10             | "L"          | 16               |
      | "XL"       | 10             | "XL"         | 16               |
      | "XXL"      | 4              | "XXL"        | 16               |

  Scenario Outline: Filter By <FilterSize> and <FilterSize2>
    Given I visit the react shopping cart page
    When I filter by <FilterSize>
    Then I should see the message <FilterProducts> product found
    And I filter by <FilterSize2>
    Then I should see the message <FilterProducts2> product found

    Examples:
      | FilterSize | FilterProducts | FilterSize2 | FilterProducts2 |
      | "XS"       | 1              | "S"         | 2               |
      | "S"        | 2              | "M"         | 3               |
      | "M"        | 1              | "ML"        | 2               |
      | "ML"       | 2              | "L"         | 11              |
      | "L"        | 10             | "XL"        | 13              |
      | "XL"       | 10             | "XXL"       | 10              |
      | "XXL"      | 4              | "XS"        | 5               |

# Scenario Outline: Filter By Multiple Sizes and Unfilter Single Size
# e.g. >> S, M, L then << S

# Scenario Outline: Filter By Multiple Sizes and Unfilter Multiple Sizes
# e.g. >> S, M, L then << S, M

# Scenario Outline: Filter By Multiple Sizes and Unfilter All
# e.g. >> S, M, L then << S, M, L