import {Then, When} from "cypress-cucumber-preprocessor/steps"

When ('I navigate to Categories page', ()=>{
    cy
    .contains('Settings',{timeout: 5000})
    .should('be.visible').click()

    cy
    .contains('Categories',{timeout: 5000})
    .should('be.visible').click()


})
Then ('I can create a Category', ()=>{

    cy.intercept(/create/).as("createCat");

    //open category creation page
    cy
    .get('.button.button-alpha.button-fab')
    .click({force: true})

    //Save button should be disabled
    cy
    .contains('Save')
    .should('be.disabled')

    //create category
    cy
    .get('#category-name')
    .type('Automated Category')
    .should('have.value','Automated Category')

	cy
    .get('#category-description')
    .type('Automated Category Description')
    .should('have.value','Automated Category Description')

	cy
    .contains('Save')
    .click()

    cy.wait("@createCat").its("response.statusCode").should("be.oneOf", [200, 201, 204]);

    //Dismiss confirmation notification
    cy
    .contains('Saved category')
    .should('exist')

    cy
    .contains('Dismiss')
    .click()
})

Then ('Verify created Category exists', ()=>{
    cy
    .contains('Automated Category')
    .should('exist')
})

Then ('I can delete a Category', ()=>{
    cy
    .contains('Automated Category')
    .click()

    cy
    .contains('Delete category')
    .click()

    //check for exact matching text to isolate Delete button and differentiate it from other elements with Delete text
    cy
    .contains(/^Delete$/)
    .click()
})

Then ('Verify deleted Category does not exist', ()=>{
    //delete confirmation message
    cy
    .contains ('Category deleted')
    .should('exist')

    cy
    .contains('Dismiss')
    .click()
    
    cy
    .contains('Automated Category')
    .should('not.exist')
})