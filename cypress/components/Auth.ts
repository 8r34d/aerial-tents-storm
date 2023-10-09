import AuthAlias from "../types/AuthAlias";
import AuthFixture from "../types/AuthFixture";
import HttpStatus from "../types/HTTPStatus";
import HttpMethod from "../types/HttpMethod";

const { _ } = Cypress;

const resources = {
  auth: "auth",
};

class Auth {
  private request = (
    alias: AuthAlias,
    method: HttpMethod,
    resource: string,
    body: string
  ) => {
    cy.request(method, `${Cypress.env("api_booker")}/${resource}`, body).as(
      alias
    );
  };

  private response = (
    alias: AuthAlias,
    status: HttpStatus,
    fixture: AuthFixture
  ) => {
    cy.get<Cypress.ObjectLike>(`@${alias}`).should((response) => {
      expect(response.status).to.eq(status);
      if (alias === "postCreateToken") {
        expect(response.body)
          .to.have.property(fixture)
          .and.to.match(/[a-zA-Z0-9]{15,}/);
      } else {
        expect(response.body).to.eql(fixture);
      }
    });
  };

  printToken = (alias: AuthAlias) => {
    cy.get<Cypress.ObjectLike>(`@${alias}`).then(($alias) => {
      cy.log(JSON.stringify($alias.body));
    });
  };

  requestCreateToken = (alias: AuthAlias, fixture: AuthFixture) => {
    cy.fixture(_.camelCase(fixture)).then(($f) => {
      this.request(alias, "POST", resources.auth, $f);
    });
  };

  responseCreateToken = (
    alias: AuthAlias,
    status: HttpStatus,
    fixture: AuthFixture
  ) => {
    cy.fixture(_.camelCase(fixture)).then(($f) => {
      this.response(alias, status, $f);
    });
  };
}

export default Auth;
