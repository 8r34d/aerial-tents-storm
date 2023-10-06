import { defineParameterType } from "@badeball/cypress-cucumber-preprocessor";
import Shipping from "../../types/Shipping";
import Size from "../../types/Size";

defineParameterType({
  name: "locator",
  regexp: /"([^"]*)"/,
  transformer: (s: string) => {
    const t = Cypress._.camelCase(s);
    cy.log(t);
    return t;
  },
});

defineParameterType({
  name: "product",
  regexp: /"([^"]*)"/,
  transformer: (s: string) => {
    cy.log(s);
    return s;
  },
});

defineParameterType({
  name: "shipping",
  regexp: /"([^"]*)"/,
  transformer: (s: Shipping) => {
    cy.log(s.toString());
    return s;
  },
});

defineParameterType({
  name: "size",
  regexp: /"([^"]*)"/,
  transformer: (s: Size) => {
    cy.log(s);
    return s;
  },
});
