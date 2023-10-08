# Cypress with Cucumber and TypeScript

Automated testing of UI and API

- Cypress

  - https://docs.cypress.io/guides/getting-started/installing-cypress

- Cucumber

  - https://github.com/badeball/cypress-cucumber-preprocessor

- TypeScript

  - https://docs.cypress.io/guides/tooling/typescript-support

## Best Practices

1. Object model solution
2. Separation of layers and SOLID principles
3. Business oriented definition of tests
4. Data driven testing
5. CI Pipeline

## Tags

Test tags applied to features and scenarios

- for illustration, tags have only been applied to:

  - api: get-booking-ids.feature
  - ui: cart.feature

### @api

api only

    npx cypress run --env tags=@api

### @cart

cart feature only

    npx cypress run --env tags=@cart

### @get-booking-ids

get-booking-ids feature only

    npx cypress run --env tags=@get-booking-ids

### @regression

regression testing of api and ui

    npx cypress run --env tags=@regression

### @smoke

smoke testing of api and ui

    npx cypress run --env tags=@smoke

### @ui

ui only

    npx cypress run --env tags=@ui

## Test Applications

### UI

- https://react-shopping-cart-67954.firebaseapp.com/

### API

- https://restful-booker.herokuapp.com/
