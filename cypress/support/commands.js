// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('loginWith', ({ email, password }) =>
  cy.visit('/login')
    .findByPlaceholderText(/email/)
    .type(email)
    .findByPlaceholderText(/password/)
    .type(password)
    .findByText('Log in')
    .click()
)
