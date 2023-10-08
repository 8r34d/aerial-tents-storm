const resources = {
  auth: "auth",
};

class Auth {
  printToken = (alias: string) => {
    cy.get<Cypress.ObjectLike>(`@${alias}`).then(($alias) => {
      cy.log($alias.body);
    });
  };

  requestCreateToken = (alias: string, fixture: string) => {
    cy.fixture(fixture).then(($f) => {
      this.request(alias, "POST", resources.auth, $f);
    });
  };

  request = (alias: string, method: string, resource: string, body: object) => {
    cy.request(method, `${Cypress.env("api_booker")}/${resource}`, body).as(
      alias
    );
  };
  response = (alias: string, status: number, fixture: string) => {
    cy.fixture(fixture).then(($f) => {
      cy.get<Cypress.ObjectLike>(`@${alias}`).should((response) => {
        expect(response.status).to.eq(status);
        expect(response.body)
          .to.have.property($f)
          .and.to.match(/[a-zA-Z0-9]{15,}/);
      });
    });
  };
}

export default Auth;
