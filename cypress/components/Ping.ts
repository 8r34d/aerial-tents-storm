import HttpStatus from "../types/HTTPStatus";
import HttpMethod from "../types/HttpMethod";
import PingAlias from "../types/PingAlias";
import PingFixture from "../types/PingFixture";

const { _ } = Cypress;

const resources = {
  ping: "ping",
};

class Ping {
  private request = (
    alias: PingAlias,
    method: HttpMethod,
    resource: string
  ) => {
    cy.request(method, `${Cypress.env("api_booker")}/${resource}`).as(alias);
  };

  private response = (
    alias: PingAlias,
    status: HttpStatus,
    fixture: PingFixture
  ) => {
    cy.get<Cypress.ObjectLike>(`@${alias}`).should((response) => {
      expect(response.status).to.eq(status);
      expect(response.body).to.eq(fixture);
    });
  };

  requestHealthCheck = (alias: PingAlias) => {
    this.request(alias, "GET", resources.ping);
  };

  responseHealthCheck = (
    alias: PingAlias,
    status: HttpStatus,
    fixture: PingFixture
  ) => {
    cy.fixture(_.camelCase(fixture)).then(($f) => {
      this.response(alias, status, $f);
    });
  };
}

export default Ping;
