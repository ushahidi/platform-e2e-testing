describe('Data Veiw', ()=>{
it('Checks Data View',()=>{
	cy.wait(3000)//this wait can be done away with if browser(viewport) window is maximized.																																																																																
	cy.contains('Data').click({force: true})
	cy.get('.hide-until-medium > .searchbar > .searchbar-options > .searchbar-options-filter > sort-and-filter-counter > .button-label-d > [translate=""]').contains('Sort & filter')
	   .click({force: true})

	//launch sort & filter drop-down and sort posts to show Under Review only
	cy.get('.hide-until-medium > .searchbar > .searchbar-options > .searchbar-options-filter').click({force: true})
	cy.contains('Published').click({force: true})

	cy.contains('Apply').click({force:true})


	//Changed this to check that the Save Search button exists when user alters the Filters. For now we'll leave it as
	//check that Save Search button appears and exists.
	cy.contains('Save Search').should('exist')
	})

})