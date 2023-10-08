const resources = {
  ping: "ping",
};

class Ping {
  requestHealthCheck = (alias: string) => {
    this.request(alias, resources.ping);
  };
  request = (alias: string, resource: string) => {
    cy.request(`${Cypress.env("api_booker")}/${resource}`).as(alias);
  };
  response = (alias: string, status: number, fixture: string) => {
    cy.fixture(fixture).then(($f) => {
      cy.get<Cypress.ObjectLike>(`@${alias}`).should((response) => {
        expect(response.status).to.eq(status);
        expect(response.body).to.eq($f);
      });
    });
  };
}

export default Ping;
