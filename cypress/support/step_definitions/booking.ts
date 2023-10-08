import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Booking from "../../components/Booking";
import Ping from "../../components/Ping";
import Auth from "../../components/Auth";
import AuthAlias from "../../types/AuthAlias";
import AuthFixture from "../../types/AuthFixture";
import PingAlias from "../../types/PingAlias";
import HttpStatus from "../../types/HTTPStatus";
import PingFixture from "../../types/PingFixture";

const auth = new Auth();
const booking = new Booking();
const ping = new Ping();

When("I request a healthcheck as {string}", (alias: PingAlias) => {
  ping.requestHealthCheck(alias);
});

Then(
  "I should get a healthcheck response as {string} with {int} {string}",
  (alias: PingAlias, status: HttpStatus, fixture: PingFixture) => {
    ping.response(alias, status, fixture);
  }
);

When(
  "I request an auth token as {string} with {string}",
  (alias: AuthAlias, fixture: AuthFixture) => {
    auth.requestCreateToken(alias, fixture);
  }
);

Then(
  "I should get an auth token response as {string} with {int} {string}",
  (alias: AuthAlias, status: HttpStatus, fixture: AuthFixture) => {
    auth.responseCreateToken(alias, status, fixture);
  }
);
