const resources = {
  ping: "ping",
};

class Booking {
  getHealthCheck = (alias: string) => {
    this.request(alias, resources.ping);
  };
  request = (alias: string, resource: string) => {
    cy.request(`${Cypress.env("api_booker")}/${resource}`).as(alias);
  };
  response = (alias: string, status: number, body: string) => {
    cy.get<Cypress.ObjectLike>(`@${alias}`).should((response) => {
      expect(response.status).to.eq(status);
      expect(response.body).to.eq(body);
    });
  };
}

export default Booking;
