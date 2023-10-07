import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SizeFilter from "../../components/SizeFilter";
import Size from "../../types/Size";
// import ProductList from "../../components/ProductList";

// const productList = new ProductList();
const sizeFilter = new SizeFilter();

When("I filter by {size}", (size: Size) => {
  // productList.visitPage();
  sizeFilter.selectSize(size);
});
