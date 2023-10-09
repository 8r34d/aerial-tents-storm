import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Auth from "../../components/Auth";
import AuthAlias from "../../types/AuthAlias";
import AuthFixture from "../../types/AuthFixture";
import HttpStatus from "../../types/HTTPStatus";

const auth = new Auth();

When(
  "I request an auth token as {string} with {string}",
  (alias: AuthAlias, fixture: AuthFixture) => {
    auth.requestCreateToken(alias, fixture);
    // auth.printToken(alias);
  }
);

Then(
  "I should get an auth token response as {string} with {int} {string}",
  (alias: AuthAlias, status: HttpStatus, fixture: AuthFixture) => {
    auth.responseCreateToken(alias, status, fixture);
    // auth.printToken(alias);
  }
);
