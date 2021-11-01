import {Given, And, Then, When} from "cypress-cucumber-preprocessor/steps"

Given ('I can add a User', ()=>{
	cy.visit('https://test-deployment.steve-buscemi.ush.zone/views/data')

	cy.contains('Sign up').click({force: true})

	cy.get('[placeholder="Display Name"]').type(Cypress.env('ush_user_name'))
	cy.get('input[id=email]').type(Cypress.env('ush_user_email'))
	cy.get('input[id=password]').type(Cypress.env('ush_user_pwd'))

	cy.wait(2000)
	cy.get('[type="submit"]').eq(1).click({force: true})
})
When ('I navigate to Users page', ()=>{
	cy.contains('Settings',{timeout: 5000}).should('be.visible').click()

	cy.wait(3000)

	cy.contains('Users').click()

})
Then ('I can create a Member User',()=>{
	
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

Then ('I can delete a User', ()=>{
	cy.contains('Settings').click({force: true})

	cy.contains('Users').click()
	cy.wait(3000)
	cy.contains('Automated User').click()

	//click on delete button that pops up when user has been selected
	cy.get('.button-destructive').click()

	//click on delete on confirmation modal to complete deletion
	cy.get('.button-destructive').eq(1).click()
})

Then ('I can sort Users', ()=>{
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
