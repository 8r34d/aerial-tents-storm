const locators = {};

class Checkout {
  assertConfirmation = (message) => {
    cy.on("window:alert", (t) => {
      expect(t).to.contains(message);
    });
  };
}

export default Checkout;
