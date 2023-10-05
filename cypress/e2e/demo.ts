import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I visit the shopping cart page", () => {
  cy.visit("https://react-shopping-cart-67954.firebaseapp.com/");
});

When("I view the shopping cart page", () => {
  cy.url().should("eq", "https://react-shopping-cart-67954.firebaseapp.com/");
});

Then("I should see products found is {int}", (products: number) => {
  cy.get(".sc-ebmerl-4 > p").contains(`${products} Product(s) found`);
});
