import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"


//for this login spec file to run from another file, it needs to be located in common folder
Given ('Login to the application',()=>{
    cy.visit('https://test-deployment.steve-buscemi.ush.zone/views/data')

	cy.contains('Log in').click({force: true})

    cy.get('input[id=email]').type(Cypress.env('ush_admin_email'))
    cy.get('input[id=password]').type(Cypress.env('ush_admin_pwd'))

    cy.get('.button-alpha').contains('Log in').click()
//add assertions to confirm user is actually logged in
})