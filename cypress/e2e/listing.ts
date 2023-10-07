import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductList from "../components/List";

const listing = new ProductList();

Given("I visit the listing page", () => {
  listing.visitPage();
});

When("I view the listing page", () => {
  listing.viewPage();
});

Then("I should see {int} product(s) found", (products: number) => {
  listing.assertProductsFound(products);
});

Then("I should see {int} item(s) in the list", (products: number) => {
  listing.assertItemsFound(products);
});
