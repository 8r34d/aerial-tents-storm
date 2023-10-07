import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductList from "../../components/ProductList";

const productList = new ProductList();

// moved to step_definitions/common.ts

// Given("I visit the product list page", () => {
//   productList.visitPage();
// });

// When("I view the product list page", () => {
//   productList.viewPage();
// });

// Then("I should see the message {int} product(s) found", (products: number) => {
//   productList.assertProductsFound(products);
// });

// Then(
//   "I should see {int} product(s) in the product list",
//   (products: number) => {
//     productList.assertItemsFound(products);
//   }
// );
