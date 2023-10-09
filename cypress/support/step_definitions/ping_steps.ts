import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Ping from "../../components/Ping";
import PingAlias from "../../types/PingAlias";
import HttpStatus from "../../types/HTTPStatus";
import PingFixture from "../../types/PingFixture";

const ping = new Ping();

When("I request a healthcheck as {string}", (alias: PingAlias) => {
  ping.requestHealthCheck(alias);
});

Then(
  "I should get a healthcheck response as {string} with {int} {string}",
  (alias: PingAlias, status: HttpStatus, fixture: PingFixture) => {
    ping.responseHealthCheck(alias, status, fixture);
  }
);
