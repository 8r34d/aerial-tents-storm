import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I request a healthcheck", () => {
  cy.request(`${Cypress.env("api_booker")}/ping`).as("healthcheck");
});

Then(
  "I should get a healthcheck response {int} {string}",
  (code: number, message: string) => {
    cy.get("@healthcheck").its("status").should("eq", code);
    cy.get("@healthcheck").its("body").should("eq", message);
  }
);
