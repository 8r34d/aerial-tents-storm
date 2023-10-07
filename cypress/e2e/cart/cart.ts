import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Cart from "../../components/Cart";

const cart = new Cart();

When("I checkout the cart", () => {
  cart.checkout();
});

When("I close the cart", () => {
  cart.closeCart();
});

When("I open the cart", () => {
  cart.openCart();
});

Then("I should see the empty message {string}", (message: string) => {
  cart.assertEmptyMessage(message);
});

Then("I should see quantity {string} in the cart", (quantity: string) => {
  cart.assertQuantity(quantity);
});

Then("I should see the subtotal {string}", (subtotal: string) => {
  cart.assertSubtotal(subtotal);
});

Then("I should see title {string}", (title: string) => {
  cart.assertTitle(title);
});
