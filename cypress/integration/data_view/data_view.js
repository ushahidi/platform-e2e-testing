import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

When ('I navigate to data view page', ()=>{
		//verify login modal is dismissed before proceeding with tests
		cy.get('.modal-window')
		  .should('not.be.visible')																																																																																
		cy.contains('Data')
		  .click()
		cy.url()
		  .should('include','/views/data')
		cy.get('.hide-until-medium > .searchbar > .searchbar-options > .searchbar-options-filter > sort-and-filter-counter > .button-label-d > [translate=""]').contains('Sort & filter')
		   .click({force: true})
	})
	
Then ('I should see data view information', ()=>{
		//launch sort & filter drop-down and sort posts to show Under Review only
		cy.contains('Sort & filter').click({force: true})
		cy.contains('Published').click({force: true})
	
		cy.contains('Apply').click({force:true})
	
	
		//Changed this to check that the Save Search button exists when user alters the Filters. For now we'll leave it as
		//check that Save Search button appears and exists.
		cy.contains('Save Search').should('exist')
		})
