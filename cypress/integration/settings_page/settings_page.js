import { Then, When } from "cypress-cucumber-preprocessor/steps"

When ('I navigate to Settings page', ()=>{
  
        // cy.wait(5000) //wait for link to be visible
        cy.contains('Settings',{timeout: 5000}).should('be.visible').click()
        // cy.contains('Settings').click({force: true})
    })
  Then ('It verifies Settings', ()=>{
        cy.location('pathname').should('eq','/settings')

        cy.contains('General').should('be.visible').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Surveys').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Data Sources').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Import').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Configure HDX API').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Export and tag data').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Users').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Roles').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Categories').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Webhooks').click()
        cy.wait(3000)
        cy.go('back')
  
        cy.contains('Plans').click()
        cy.wait(3000)
        cy.go('back')
  
      })