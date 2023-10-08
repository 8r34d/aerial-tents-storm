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

  https://restful-booker.herokuapp.com/booking

  booking ids by 

  firstname optional 	String  Return bookings with a specific firstname

  lastname optional 	String  Return bookings with a specific lastname

  checkin optional 	date      Return bookings that have a checkin date greater than or equal to the set checkin date.
                              Format must be CCYY-MM-DD

  checkout optional 	date    Return bookings that have a checkout date greater than or equal to the set checkout date.
                              Format must be CCYY-MM-DD
                              
  https://restful-booker.herokuapp.com/booking?firstname=sally&lastname=brown
*/

class Booking {
  requestGetBookingIds = (alias: BookingAlias, fixture: BookingFixture) => {
    cy.fixture(_.camelCase(fixture)).then(($f) => {
      this.request(alias, "GET", resources.booking, $f);
    });
  };

  request = (
    alias: BookingAlias,
    method: HttpMethod,
    resource: string,
    body: JSON
  ) => {
    cy.request(`${Cypress.env("api_booker")}/${resource}`).as(alias);
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

  response = (
    alias: BookingAlias,
    status: HttpStatus,
    fixture: BookingFixture
  ) => {
    cy.fixture(_.camelCase(fixture)).then(($f) => {
      cy.get<Cypress.ObjectLike>(`@${alias}`).should((response) => {
        expect(response.status).to.eq(status);
        expect(response.body).to.eq($f);
      });
    });
  };
}

export default Booking;
