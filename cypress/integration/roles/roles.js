import {Then, When} from "cypress-cucumber-preprocessor/steps"

When ('I navigate to Roles page', () => {
        cy.contains('Settings',{timeout: 5000}).should('be.visible').click()
        cy.contains('Roles').should('be.visible').click()
}) 
Then ('I can create a new role', ()=>{
    //open role creation page
    cy.get('.button > .iconic > use').click()

    //verify "no permissions found" text isn't present and list of permissions can be seen
    cy.get('fieldset > .alert').should('not.be.visible')

    cy.get('#role-name')
      .type('Automated Role')

    cy.get('#role-description')
      .type('Automated Role Description')
      .should('have.value','Automated Role Description')

    cy.get(':nth-child(8) > label')
      .click()

    cy.get('.button-alpha')
      .click()

})

Then ('I can verify created role exists', ()=>{
  cy.contains('Automated Role').should('be.visible')
})