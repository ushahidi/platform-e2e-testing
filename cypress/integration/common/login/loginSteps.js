import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"


//for this login spec file to run from another file, it needs to be located in common folder
Given ('Login to the application',()=>{
    cy.visit(Cypress.env('baseUrl'))

	cy.get('[data-cy="mb-login-page-button"]').click()

    cy.get('[data-cy="login-email-field"]').type(Cypress.env('ush_admin_email'))
    cy.get('[data-cy="login-password-field"]').type(Cypress.env('ush_admin_pwd'))

    cy.get('[data-cy="login-complete-button"]').contains('Log in').click()
//add assertions to confirm user is actually logged in
})
