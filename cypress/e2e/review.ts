/// <reference path="../support/index.d.ts" />

describe('Review', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should close modal when escape is pressed', () => {
    cy.exitModalOnEscape()
  })
})
