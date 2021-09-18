// load type definitions from Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    exitModalOnEscape(): Chainable<Element>
  }
}
