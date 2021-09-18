import '@testing-library/cypress/add-commands'

Cypress.Commands.add('exitModalOnEscape', () => {
  cy.get('body').type('{esc}')
})
