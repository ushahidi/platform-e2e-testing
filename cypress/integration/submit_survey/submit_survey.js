import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given ('I launch application as unauthorised user', ()=>{
    cy.visit(Cypress.env('baseUrl'))
})

When ('I navigate to Survey', ()=> {
    cy.get('.fab > .button-alpha > .iconic > use').click()
    cy.get('.mainsheet-window').contains('Automated Survey').eq(0).click()
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

// Then ('I submit a response to a Survey', ()=> {
//     cy.get
// })