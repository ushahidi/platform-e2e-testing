describe('Platform Test', () => {
})

describe ('Settings', ()=>{
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

	  cy.contains('Export data').click()
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
describe('Users', ()=>{
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
	cy.wait(3000)
	cy.contains('Automated User').click()

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


	cy.get('.filter-actions > .button-alpha').click({force: true})

})
})

describe ('Surveys', ()=>{
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

	// Radio Field
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


	//Tasks
	//opens tasks creation modal
	cy.contains('Add task').click({force: true})

	//enters values in Tasks Name and Description fields
	cy.get('[placeholder="Name this task..."]').type('Automated Task')
	cy.get('[placeholder="Describe this task..."]').type('Automated Task Description')

	cy.contains('Add & close').click()


	//create some task fields
	//short text field
	cy.get('#section-build-interim_id_3 > .listing > .listing-item > .listing-item-primary > .listing-item-title > .button').click()
	cy.contains('Short text').click()
	cy.get('#field-name').type('Automated Short Text Field')
	cy.contains('Add & close').click()

	//long text field
	cy.get('#section-build-interim_id_3 > .listing > .listing-item > .listing-item-primary > .listing-item-title > .button').click()
	cy.contains('Long text').click()
	cy.get('#field-name').type('Automated Long Text Field')
	cy.contains('Add & close').click()

	//click Save to save survey and complete survey creation process
	cy.contains('Save').click()

})
})

describe('Categories', ()=>{
//Creating a Category
//Is not a child category, default language, default permissions and visibility
it ('Navigates to Categories', () => {
	   cy.wait(4000) //wait for link to be visible
	   cy.contains('Settings').click({force: true})

	   cy.contains('Categories').click({force: true})

	   //open category creation page
	   cy.wait(4000)
	   cy.get('.button.button-alpha.button-fab').click({force: true})
	})
})
describe('Categories', ()=>{
it('Creates Category',() => {
		cy.get('#category-name').type('Automated Category')
		cy.get('#category-description').type('Automated Category Description')

		cy.contains('Save').click()
	})

//Signing Up user
it ('Signs User up', () => {
	cy.visit('https://test-deployment.steve-buscemi.ush.zone/views/data')

	cy.contains('Sign up').click({force: true})

	cy.get('[placeholder="Display Name"]').type(Cypress.env('ush_user_name'))
	cy.get('input[id=email]').type(Cypress.env('ush_user_email'))
	cy.get('input[id=password]').type(Cypress.env('ush_user_pwd'))

	cy.wait(2000)
	cy.get('[type="submit"]').eq(1).click({force: true})
	})

})