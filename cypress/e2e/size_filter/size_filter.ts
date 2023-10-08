import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SizeFilter from "../../components/SizeFilter";
import Size from "../../types/Size";

const sizeFilter = new SizeFilter();

When("I filter by {size}", (size: Size) => {
  sizeFilter.selectSize(size);
});

When("I unfilter by {size}", (size: Size) => {
  sizeFilter.unselectSize(size);
});
