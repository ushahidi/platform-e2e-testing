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
    //open category creation page
    cy
    .get('.button.button-alpha.button-fab')
    .click({force: true})

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
})