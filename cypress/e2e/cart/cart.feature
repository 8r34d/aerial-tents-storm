@cart @ui
Feature: Cart

  @regression
  Scenario: Empty Cart

    Given I visit the react shopping cart page
    When I open the cart
    Then I should see title "Cart"
    And I should see the empty message "Add some products in the cart :)"
    And I should see quantity "0" in the cart
    And I should see the subtotal "$ 0.00"
    And I close the cart

  @regression @smoke
  Scenario: Empty Cart and Checkout

    Given I visit the react shopping cart page
    When I open the cart
    Then I should see title "Cart"
    And I should see the empty message "Add some products in the cart :)"
    And I should see quantity "0" in the cart
    And I should see the subtotal "$ 0.00"
    When I checkout the cart
    Then I should see checkout message "Add some product in the cart!"

  @regression
  Scenario: Cart with Single Product Item

    Given I visit the react shopping cart page
    When I add "Cropped Stay Groovy off white" to the cart
    Then I should see the subtotal "$ 10.90"

  @regression @smoke
  Scenario: Cart with Single Product Item and Checkout

    Given I visit the react shopping cart page
    When I add "Cropped Stay Groovy off white" to the cart
    Then I should see the subtotal "$ 10.90"
    When I checkout the cart
    Then I should see checkout message "Checkout - Subtotal: $ 10.90"

  @regression
  Scenario: Cart with Multiple Product Items

    Given I visit the react shopping cart page
    When I add "Cropped Stay Groovy off white" to the cart
    And I add "Basic Cactus White T-shirt" to the cart
    Then I should see the subtotal "$ 24.15"

  @regression @smoke
  Scenario: Cart with Multiple Product Items and Checkout

    Given I visit the react shopping cart page
    When I add "Cropped Stay Groovy off white" to the cart
    And I add "Basic Cactus White T-shirt" to the cart
    Then I should see the subtotal "$ 24.15"
    When I checkout the cart
    Then I should see checkout message "Checkout - Subtotal: $ 24.15"

# Scenario: Cart Listing - Cart Items Match for Single Product Added To Cart

# Scenario: Cart Listing - Cart Items Match for Multiple Products Added To Cart

# Scenario: Cart Listing - Cart Items Match After Deleting Single Product From Cart

# Scenario: Cart Listing - Cart Items Match After Deleting Multiple Products From Cart

# Scenario: Increase Quantity of Single Product Item in Cart

# Scenario: Increase Quantities of Multiple Product Items in Cart

# Scenario: Descrease Quantity of Single Product Item in Cart

# Scenario: Descrease Quantities of Multiple Product Items in Cart

# Scenario: Cart with Single Product Item then Delete

# Scenario: Cart with Multiple Product Items then Delete Single

# Scenario: Cart with Multiple Product Items then Delete Multiple

# Scenario: Cart with Multiple Product Items then Delete All
