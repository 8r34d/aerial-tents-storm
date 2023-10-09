import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Booking from "../../components/Booking";
import BookingAlias from "../../types/BookingAlias";
import BookingFixture from "../../types/BookingFixture";
import HttpStatus from "../../types/HTTPStatus";

const booking = new Booking();

When(
  "I request booking ids as {string} for {string}",
  (alias: BookingAlias, fixture: BookingFixture) => {
    booking.requestGetBookingIds(alias, fixture);
    // booking.printBooking(alias);
  }
);

Then(
  "I should get a booking ids response as {string} with {int} {string}",
  (alias: BookingAlias, status: HttpStatus, fixture: BookingFixture) => {
    booking.responseGetBookingIds(alias, status, fixture);
    // booking.printBooking(alias);
  }
);
