import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

Given ('Login to the application',()=>{
    cy.visit('https://test-deployment.steve-buscemi.ush.zone/views/data')

	  cy.contains('Log in').click({force: true})

})

When ('Enter valid credentials', ()=>{
    cy.get('input[id=email]').type(Cypress.env('ush_admin_email'))
    cy.get('input[id=password]').type(Cypress.env('ush_admin_pwd'))
})

Then('click Login', ()=>{
    cy.get('.button-alpha').contains('Log in').click()
})

And('See the homepage', ()=>{

})