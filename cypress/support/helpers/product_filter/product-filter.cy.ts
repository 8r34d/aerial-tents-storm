import Product from "../../../types/Product";

const { _ } = Cypress;

describe("helpers - product filter", () => {
  context("find products from product data", () => {
    beforeEach(function () {
      cy.fixture("products").as("productsData");
    });

    it("free shipping", function () {
      const products: Array<Product> = _.filter(
        this.productsData,
        function (o) {
          return o.isFreeShipping;
        }
      );
      cy.log(`matching products: ${products.length}`);
      _.each(products, (product) => {
        cy.log(product.title, product.isFreeShipping);
      });
    });

    it("not free shipping", function () {
      const products: Array<Product> = _.filter(
        this.productsData,
        function (o) {
          return !o.isFreeShipping;
        }
      );
      cy.log(`matching products: ${products.length}`);
      _.each(products, (product) => {
        cy.log(product.title, product.isFreeShipping);
      });
    });

    it("size ML", function () {
      const products: Array<Product> = _.filter(
        this.productsData,
        function (o) {
          return o.availableSizes.includes("ML");
        }
      );
      cy.log(`matching products: ${products.length}`);
      _.each(products, (product) => {
        cy.log(product.title, product.availableSizes);
      });
    });

    it("size L and not free shipping", function () {
      const products: Array<Product> = _.filter(
        this.productsData,
        function (o) {
          return o.availableSizes.includes("L") && !o.isFreeShipping;
        }
      );
      cy.log(`matching products: ${products.length}`);
      _.each(products, (product) => {
        cy.log(product.title, product.availableSizes, product.isFreeShipping);
      });
    });
    it("size L and price < 10", function () {
      const products: Array<Product> = _.filter(
        this.productsData,
        function (o) {
          return o.availableSizes.includes("L") && o.price < 10;
        }
      );
      cy.log(`matching products: ${products.length}`);
      _.each(products, (product) => {
        cy.log(product.title, product.availableSizes, product.price);
      });
    });
    it("blue", function () {
      const products: Array<Product> = _.filter(
        this.productsData,
        function (o) {
          return o.title.toLowerCase().includes("blue");
        }
      );
      cy.log(`matching products: ${products.length}`);
      _.each(products, (product) => {
        cy.log(product.title);
      });
    });
  });
});
