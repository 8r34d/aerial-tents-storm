import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Booking from "../../components/Booking";

const booking = new Booking();

When("I request a healthcheck as {string}", (alias: string) => {
  booking.getHealthCheck(alias);
});

Then(
  "I should get a response as {string} with {int} {string}",
  (alias: string, status: number, body: string) => {
    booking.response(alias, status, body);
  }
);
