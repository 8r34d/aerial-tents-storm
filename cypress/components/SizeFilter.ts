import Size from "../types/Size";

const locators = {
  sizes: ".sc-bj2vay-0",
  // size: "input[data-testid='checkbox']"
  size: ".checkmark",
};

class SizeFilter {
  selectSize(size: Size) {
    cy.log(`select size: ${size}`);
    cy.intercept(
      "https://react-shopping-cart-67954.firebaseio.com/products.json"
    ).as("selectSize");
    cy.get(`input[value='${size}']`).siblings(locators.size).click();
    cy.wait("@selectSize").its("response.statusCode").should("eq", 200);
  }
  unselectSize(size: Size) {
    cy.log(`unselect size: ${size}`);
    this.selectSize(size);
  }
}

export default SizeFilter;
