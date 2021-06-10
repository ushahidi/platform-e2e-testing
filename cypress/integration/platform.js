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

	//launch sort & filter drop-down and sort posts to show Under Review only
	cy.get('.hide-until-medium > .searchbar > .searchbar-options > .searchbar-options-filter').click()
	cy.contains('Published').click({force: true})

	//Clicking on Published dismisses the SOrt&Filter overlay. I have to relaunch it in this piece of code that follows. Need to
	//check into having it persist to click the apply button.
	cy.get('.hide-until-medium > .searchbar > .searchbar-options > .searchbar-options-filter').click()
	cy.get('.hide-until-medium > .searchbar > .dropdown-menu > .filter-actions > .button-alpha').click()


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

it ('Creates a Member User',()=>{
	cy.contains('Settings').click({force: true})

	cy.wait(3000)

	cy.contains('Users').click()

	cy.get('.fab > .button > .iconic > use').click()

	cy.get('input[name="full_name"]').type(Cypress.env('ush_user_name'))
	cy.get('input[name="email"]').type(Cypress.env('ush_user_email'))
	cy.get('input[name="password"]').type(Cypress.env('ush_user_pwd'))

	//expand list of roles
	cy.get('.dropdown-trigger > .iconic > use').click()
	//select Member role
	cy.contains('Member').click()

	cy.get('.button-alpha').click()
})

it ('Deletes a User', ()=>{
	cy.contains('Settings').click({force: true})

	cy.contains('Users').click()
	//the number 67 is auto-assigned when a new user is created and auto-increments with every creation. current count is 67.
	cy.get('#user-67 > div.listing-item-select > input[type=checkbox]').click() 

	//click on delete button that pops up when user has been selected
	cy.get('.button-destructive').click()

	//click on delete on confirmation modal to complete deletion
	cy.get('.button-destructive').eq(1).click()
})

it ('Sorts Users', ()=>{
	cy.contains('Settings').click({force: true})

	cy.contains('Users').click()

	//expand filters drop-down
	cy.get('#toggleUserSearchFilters').click()

	//select descending order
	cy.get(':nth-child(1) > :nth-child(3) > label').click()

	//select admin role - but this is commented out because when enabled, filters only picks admin and not admin together with member
	// cy.get('[model="filters.role"] > :nth-child(2) > label').click()

	//select Member role
	cy.get('[model="filters.role"] > :nth-child(3) > label').click()


	cy.get('.filter-actions > .button-alpha').click()

})


//Survey creation
it ('Opens Survey Creation Page',() =>{
	cy.wait(3000)
	cy.contains('Settings').click({force: true})
	cy.contains('Surveys').click()

	cy.contains('New Survey').click()

	cy.get('#survey_name').type('Automated Survey')
	cy.get('#survey_description').type('Automated Description')


	//add survey fields
	//title field
	cy.get('#survey-build-post > .listing > :nth-child(2) > .listing-item-primary > .listing-item-title').click()
	cy.get('#field-name').type('Automated Title')
	cy.contains('Add & close').click()

	//description field
	cy.get('#survey-build-post > .listing > :nth-child(3) > .listing-item-primary > .listing-item-title').click()
	cy.get('#field-name').type('Automated Description')
	cy.contains('Add & close').click()

	//short text field
	cy.contains('Add field').click()
	cy.contains('Short text').click()
	cy.get('#field-name').type('Automated Short Text Field')
	cy.contains('Add & close').click()

	//long text field
	cy.contains('Add field').click()
	cy.contains('Long text').click()
	cy.get('#field-name').type('Automated Long Text Field')
	cy.contains('Add & close').click()

	//number(decimal) field
	cy.contains('Add field').click()
	cy.contains('Number (Decimal)').click()
	cy.get('#field-name').type('Automated Decimal Number Field')
	cy.contains('Add & close').click()

	//number(integer field)
	cy.contains('Add field').click()
	cy.contains('Number (Integer)').click()
	cy.get('#field-name').type('Automated Number Integer Field')
	cy.contains('Add & close').click()

	//Location field
	cy.contains('Add field').click()
	cy.contains('Location').click()
	cy.get('#field-name').type('Automated Location Field')
	cy.contains('Add & close').click()

	//Date Field
	cy.contains('Add field').click()
	cy.contains('Date').click()
	cy.get('#field-name').type('Automated Date Field')
	cy.contains('Add & close').click()


	//Date & Time Field
	cy.contains('Add field').click()
	cy.contains('Date & Time').click()
	cy.get('#field-name').type('Automated Date & Time Field')
	cy.contains('Add & close').click()

	//Select Field 
	cy.contains('Add field').click()
	cy.get('#bootstrap-app > ush-modal-container > div > div.modal-window > modal-content > survey-attribute-create > dl > dt:nth-child(15) > a').click()
	cy.get('#field-name').type('Automated Select Field')
	cy.contains('Add & close').click()

	Radio Field
	cy.contains('Add field').click()
	cy.contains('Radio Button(s)').click()
	cy.get('#field-name').type('Automated Radio Buttons Field')

	
	cy.get('.button-secondary').click() //click Add button to add radio field
	cy.get('[placeholder="Option 1"]').type('Radio 1') //puts a value in the radio field

	cy.contains('Add & close').click()

	//Checkbox Field
	cy.contains('Add field').click()
	cy.contains('Checkbox(es)').click()
	cy.get('#field-name').type('Automated Checkboxes Field')

	cy.get('.button-secondary').click() //click Add button to add radio field
	cy.get('[placeholder="Option 1"]').type('Radio 1') //puts a value in the radio field

	cy.contains('Add & close').click()

	//Related Post Field
	cy.contains('Add field').click()
	cy.contains('Related Post').click()
	cy.get('#field-name').type('Automated Related Post Field')
	cy.contains('Add & close').click()

	//Image Field
	cy.contains('Add field').click()
	cy.contains('Image').click()
	cy.get('#field-name').type('Automated Image Field')
	cy.contains('Add & close').click()

	//Embed Video
	cy.contains('Add field').click()
	cy.contains('Embed video').click()
	cy.get('#field-name').type('Automated Embeded Video Field')
	cy.contains('Add & close').click()

	//Categories
	cy.contains('Add field').click()
	cy.contains('Categories').click()
	cy.get('#field-name').type('Automated Categories Field')
	cy.contains('Add & close').click()


	//click Save to save survey and complete survey creation process
	cy.contains('Save').click()

})

})