import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"


//for this login spec file to run from another file, it needs to be located in common folder
Given ('Login to the application',()=>{
    cy.visit(Cypress.env('baseUrl'))

	cy.get('[data-cy="mb-login-page-button"]').click()

    //fields not filled, verify login button disabled
    cy.get('[data-cy="login-complete-button"]').should('be.disabled')

    cy.get('[data-cy="login-email-field"]').type(Cypress.env('ush_admin_email'))
    cy.get('[data-cy="login-password-field"]').type(Cypress.env('ush_admin_pwd'))

    cy.get('[data-cy="login-complete-button"]')
        .should('not.be.disabled')
        .contains('Log in')
        .click()

    //verify user is logged in
    //confirm login modal is dismissed
    cy.get('.modal-window')
      .should('not.be.visible')
    
    cy.get('[data-cy="mb-signup-page-button"]')
      .should('not.be.visible')

    cy.get('[data-cy="mb-logout-button"]')
      .should('be.visible')
      
    //add assertions to confirm user is actually logged in
    //verify from url that user is in views page
    cy.url()
        .should('contain','/views/map')

})
