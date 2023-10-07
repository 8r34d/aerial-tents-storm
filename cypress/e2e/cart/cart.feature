Feature: Cart

  Scenario: Empty Cart

    Given I visit the react shopping cart page
    When I open the cart
    Then I should see title "Cart"
    And I should see the empty message "Add some products in the cart :)"
    And I should see quantity "0" in the cart
    And I should see the subtotal "$ 0.00"
    And I close the cart

# Scenario: Cart with Single Product Item

#   Given I add "Cropped Stay Groovy off white" to the cart
#   When I open the cart
#   Then the subtotal should show "$ 10.90"

# Scenario: Cart with Multiple Product Items

#   Given I add "Cropped Stay Groovy off white" to the cart
#   And I add "Basic Cactus White T-shirt" to the cart
#   When I open the cart
#   Then the subtotal should show "$24.15" "$ 24.15"

# Scenario: Increase Quantity of Single Product Item in Cart

# Scenario: Increase Quantities of Multiple Product Items in Cart
