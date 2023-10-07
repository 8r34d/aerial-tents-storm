import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { defineParameterType } from "@badeball/cypress-cucumber-preprocessor";
import Shipping from "../../types/Shipping";
import Size from "../../types/Size";

import ProductList from "../../components/ProductList";

const productList = new ProductList();

Given("I visit the react shopping cart page", () => {
  productList.visitPage();
});

When("I view the react shopping cart page", () => {
  productList.viewPage();
});

Then("I should see the message {int} product(s) found", (products: number) => {
  productList.assertProductsFound(products);
});

Then(
  "I should see {int} product(s) in the product list",
  (products: number) => {
    productList.assertItemsFound(products);
  }
);

defineParameterType({
  name: "locator",
  regexp: /"([^"]*)"/,
  transformer: (s: string) => {
    const t = Cypress._.camelCase(s);
    cy.log(t);
    return t;
  },
});

defineParameterType({
  name: "product",
  regexp: /"([^"]*)"/,
  transformer: (s: string) => {
    cy.log(s);
    return s;
  },
});

defineParameterType({
  name: "shipping",
  regexp: /"([^"]*)"/,
  transformer: (s: Shipping) => {
    cy.log(s.toString());
    return s;
  },
});

defineParameterType({
  name: "size",
  regexp: /"([^"]*)"/,
  transformer: (s: Size) => {
    cy.log(s);
    return s;
  },
});
