import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
const dayjs = require('dayjs')

Given ('I launch application as unauthorised user', ()=>{
    cy.visit(Cypress.env('baseUrl'))
})

When ('I navigate to Survey', ()=> {
    cy.get('.fab > .button-alpha > .iconic > use').click()
    cy.get('.mainsheet-window').contains('Automated Survey - Do Not Delete').click()
})


//attempt to submit survey with missing required fields
Then ('I try to submit with missing required fields', ()=>{
    cy.wait(5000) 
    cy.get('.toolbar > .button-group > [type="submit"]').click()
    cy.get('.message-body')
        .should('contain','Required fields are missing')
        .contains('Dismiss')
        .click()
})

Then ('I submit a response to a Survey', ()=> {
    cy.get('#title').type('Automated Title Response')
    cy.get('#content').type('Automated Description Response')

    cy.get('#values2507').type('Automated Short Text Response')
    cy.get('#values2508').type('Automated Long Text Response')
    cy.get('#values2509').type(1.1)
    cy.get('#values2510').type(1)


    //search for Kenya on map and click on first result, and verify coordinates match selected result
    cy.get('.tooltip > .ng-valid').type('Kenya{enter}')
    cy.wait(4000)
    cy.get(':nth-child(2) > .list-item').click()
    cy.get('#lat').should('have.value',1.4419683)
    cy.get('#long').should('have.value',38.4313975)

    cy.get('#values_2512').click()
    cy.get('.arrowTop > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .today').click()

    //veriify the date field has that day's date
    cy.get('#values_2512').should('have.value',dayjs().format('YYYY-MM-DD'))


    //submit survey response
    cy.get('.toolbar > .button-group > [type="submit"]').click()

})