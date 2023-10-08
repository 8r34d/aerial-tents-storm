import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Booking from "../../components/Booking";
import Ping from "../../components/Ping";
import Auth from "../../components/Auth";

const auth = new Auth();
const booking = new Booking();
const ping = new Ping();

When("I request a healthcheck as {string}", (alias: string) => {
  ping.requestHealthCheck(alias);
});

Then(
  "I should get a healthcheck response as {string} with {int} {string}",
  (alias: string, status: number, fixture: string) => {
    ping.response(alias, status, fixture);
  }
);

When("I request an auth token as {string}", (alias: string) => {
  auth.requestCreateToken(alias);
});

Then(
  "I should get an auth token response as {string} with {int} {string}",
  (alias: string, status: number, fixture: string) => {
    auth.response(alias, status, fixture);
    auth.printToken(alias);
  }
);
