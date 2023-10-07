const locators = {
  empty: ".sc-7th5t8-1",
  quantity: ".sc-1h98xa9-3",
  subtotal: ".sc-1h98xa9-9",
  title: ".sc-1h98xa9-6",
  toggle: ".sc-1h98xa9-0",
};
class Cart {
  private toggleCart = () => {
    cy.get(locators.toggle).click();
  };
  assertEmptyMessage = (message: string) => {
    cy.get(locators.empty).should("have.text", message);
  };
  assertQuantity = (quantity: string) => {
    cy.get(locators.quantity).should("have.text", quantity);
  };
  assertSubtotal = (subtotal: string) => {
    cy.get(locators.subtotal).should("have.text", subtotal);
  };
  assertTitle = (title: string) => {
    cy.get(locators.title).should("have.text", title);
  };
  closeCart = () => {
    cy.log("close cart");
    this.toggleCart();
  };
  openCart = () => {
    cy.log("open cart");
    this.toggleCart();
  };
}

export default Cart;
