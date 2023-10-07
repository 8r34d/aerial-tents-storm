const locators = {
  allListings: ".sc-uhudcz-0",
  productsFound: ".sc-ebmerl-4 > p",
  addToCart: ".sc-124al1g-0",
  image: ".sc-124al1g-1",
  item: ".sc-124al1g-2",
  shipping: ".sc-124al1g-3",
  description: ".sc-124al1g-4",
  wrapper: ".sc-124al1g-5",
  price: ".sc-124al1g-6",
  bulk: ".sc-124al1g-7",
};

class ProductList {
  addProduct = (product: string) => {
    cy.get(locators.description)
      .contains(product)
      .siblings(locators.addToCart)
      .click();
  };

  assertItemsFound = (products: number) => {
    cy.get(locators.allListings)
      .find(locators.item)
      .should("have.length", products);
  };

  assertProductsFound = (products: number) => {
    cy.get(locators.productsFound).should(
      "have.text",
      `${products} Product(s) found`
    );
  };
  viewPage = () => {
    cy.url().should("eq", Cypress.config().baseUrl);
  };
  visitPage = () => {
    cy.visit("/");
  };
}

export default ProductList;
