describe('Platform Test', () => {
	it('Opens Platform and logs in.', () => {
	  cy.visit('https://test-deployment.steve-buscemi.ush.zone/views/data')

	  cy.contains('Log in').click({force: true})
	  cy.get('input[id=email]').type(Cypress.env('ush_admin_email'))

	  cy.get('input[id=password]').type(Cypress.env('ush_admin_pwd'))
	  cy.get('.button-alpha').contains('Log in').click()
	})

it('Checks Data View',()=>{
	cy.wait(3000)//this wait can be done away with if browser(viewport) window is maximized.																																																																																
	cy.contains('Data').click({force: true})
	cy.get('.hide-until-medium > .searchbar > .searchbar-options > .searchbar-options-filter > sort-and-filter-counter > .button-label-d > [translate=""]').contains('Sort & filter')
	   .click({force: true})

	//this line should check that Save Search button is not present and pass if not present. The Save Search button on filters is 
	//usually present when filters hve been adjusted or changed. Meaning if the Save Search button is not present, then no filters have been 
	//applied thus they are at default. This test basically checks that filters are at default. It however isn't passing currently and needs fixing.
	cy.get ('.hide-until-medium > .searchbar > .dropdown-menu > .dropdown-menu-body > .filter-buttons > .ng-pristine > [ng-show="showSaveSavedSearchButton()"] > .button')
		.should('not.exist')
	})

it('Verifies Settings',()=>{
	  cy.wait(3000) //wait for link to be visible
	  cy.contains('Settings').click({force: true})

	  cy.contains('General').click()
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
})