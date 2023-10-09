import BookingAlias from "../types/BookingAlias";
import BookingFixture from "../types/BookingFixture";
import HttpStatus from "../types/HTTPStatus";
import HttpMethod from "../types/HttpMethod";

const { _ } = Cypress;

const resources = {
  booking: "booking",
};

/*
  all booking ids

  1 - https://restful-booker.herokuapp.com/booking

  booking ids by 

  firstname optional 	String  Return bookings with a specific firstname

  lastname optional 	String  Return bookings with a specific lastname

  checkin optional 	date      Return bookings that have a checkin date greater than or equal to the set checkin date.
                              Format must be CCYY-MM-DD

  checkout optional 	date    Return bookings that have a checkout date greater than or equal to the set checkout date.
                              Format must be CCYY-MM-DD
                              
  2 - https://restful-booker.herokuapp.com/booking?firstname=sally&lastname=brown

  3 - https://restful-booker.herokuapp.com/booking?checkin=2014-03-13&checkout=2014-05-21

  fixture names:
  - all bookings          [1] => allBookings          -- fixture does not need to be called / empty fixture
  - bookings by name      [2] => bookingsByName       -- fixture contains the firstname, lastname
  - bookings by date      [3] => bookingsByDate       -- fixture contains the checkin, checkout
  - bookings by firstname [4] => bookingsByFirstname  -- fixture contains the firstname
  - bookings by lastname  [5] => bookingsByLastname   -- fixture contains the lastname
  - bookings by checkin   [6] => bookingsByCheckin    -- fixture contains the checkin
  - bookings by checkout  [7] => bookingsByCheckout   -- fixture contains the checkout

  - [A] valid data    2 -> 7
  - [B] invalid data  2 -> 7

  => 15 scenarios

  -- bookings seed data, there are 10 records, unsure if these are the same every time
  -- test with prod vs local version
  -- get by id can be used for bookings 1 to 10

*/

class Booking {
  private request = (
    alias: BookingAlias,
    method: HttpMethod,
    resource: string,
    body: string
  ) => {
    cy.request(method, `${Cypress.env("api_booker")}/${resource}`, body).as(
      alias
    );
  };

  private response = (
    alias: BookingAlias,
    status: HttpStatus,
    fixture: BookingFixture
  ) => {
    cy.get<Cypress.ObjectLike>(`@${alias}`).should((response) => {
      expect(response.status).to.eq(status);

      if (alias === "getBookingIds") {
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body[0])
          .to.have.property(fixture)
          .and.to.match(/[0-9]{1,}/);
      } else {
        //
      }
    });
  };

  printBooking = (alias: BookingAlias) => {
    cy.get<Cypress.ObjectLike>(`@${alias}`).then(($alias) => {
      cy.log(JSON.stringify($alias.body));
    });
  };

  requestGetBookingIds = (alias: BookingAlias, fixture: BookingFixture) => {
    cy.fixture(_.camelCase(fixture)).then(($f) => {
      this.request(alias, "GET", resources.booking, $f);
    });
  };

  responseGetBookingIds = (
    alias: BookingAlias,
    status: HttpStatus,
    fixture: BookingFixture
  ) => {
    cy.fixture(_.camelCase(fixture)).then(($f) => {
      this.response(alias, status, $f);
    });
  };
}

export default Booking;
