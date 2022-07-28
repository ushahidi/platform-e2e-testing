import {Then, When} from "cypress-cucumber-preprocessor/steps"

When ('I navigate to Categories page', ()=>{
    cy  
    .contains('Settings',{timeout: 10000})
    .should('be.visible').click()

    cy
    .scrollTo('bottom')
    .contains('Categories',{timeout: 10000})
    .click()

})

Then ('I can create a Category', ()=>{

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


    // //Dismiss confirmation notification
    // cy
    // .contains('Saved category')
    // .should('exist')

    // cy
    // .contains('Dismiss')
    // .click()
})

Then ('Verify created Category exists', ()=>{
    cy
    .contains('Automated Category')
    .should('exist')
})

Then ('I can delete a Category', ()=>{
    cy.wait(2000)
    cy
    .contains('Automated Category')
    .click({force:true})

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
     .contains('Automated Category')
     .should('not.exist')
 })