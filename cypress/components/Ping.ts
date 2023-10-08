import HttpStatus from "../types/HTTPStatus";
import HttpMethod from "../types/HttpMethod";
import PingAlias from "../types/PingAlias";
import PingFixture from "../types/PingFixture";

const { _ } = Cypress;

const resources = {
  ping: "ping",
};

class Ping {
  requestHealthCheck = (alias: PingAlias) => {
    this.request(alias, "GET", resources.ping);
  };
  request = (alias: PingAlias, method: HttpMethod, resource: string) => {
    cy.request(method, `${Cypress.env("api_booker")}/${resource}`).as(alias);
  };
  response = (alias: PingAlias, status: HttpStatus, fixture: PingFixture) => {
    cy.fixture(_.camelCase(fixture)).then(($f) => {
      cy.get<Cypress.ObjectLike>(`@${alias}`).should((response) => {
        expect(response.status).to.eq(status);
        expect(response.body).to.eq($f);
      });
    });
  };
}

export default Ping;
