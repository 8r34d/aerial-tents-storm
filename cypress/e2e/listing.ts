import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Listing from "../components/Listing";

const listing = new Listing();

Given("I visit the listing page", () => {
  cy.visit("/");
});

When("I view the listing page", () => {
  cy.url().should("eq", Cypress.config().baseUrl);
});

Then("I should see products found is {int}", (products: number) => {
  cy.get(listing.locators().found).contains(`${products} Product(s) found`);
});
