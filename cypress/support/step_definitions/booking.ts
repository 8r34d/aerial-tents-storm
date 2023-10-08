import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I request a healthcheck as {string}", (alias: string) => {
  cy.request(`${Cypress.env("api_booker")}/ping`).as(alias);
});

Then(
  "I should get a response as {string} with {int} {string}",
  (alias: string, status: number, body: string) => {
    cy.get(`@${alias}`).its("status").should("eq", status);
    cy.get(`@${alias}`).its("body").should("eq", body);
  }
);
