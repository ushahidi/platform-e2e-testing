import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

When ('I navigate to data view page', ()=>{
	it('Checks Data View',()=>{
		cy.wait(10000)//this wait can be done away with if browser(viewport) window is maximized.																																																																																
		cy.contains('Data').click({force: true})
		cy.get('.hide-until-medium > .searchbar > .searchbar-options > .searchbar-options-filter > sort-and-filter-counter > .button-label-d > [translate=""]').contains('Sort & filter')
		   .click({force: true})
	})
Then ('I should see data view information', ()=>{
		//launch sort & filter drop-down and sort posts to show Under Review only
		cy.wait(5000) //we have this to wait for login modal to get dismissed
		cy.contains('Sort & filter').click({force: true})
		cy.contains('Published').click({force: true})
	
		cy.contains('Apply').click({force:true})
	
	
		//Changed this to check that the Save Search button exists when user alters the Filters. For now we'll leave it as
		//check that Save Search button appears and exists.
		cy.contains('Save Search').should('exist')
		})
})
