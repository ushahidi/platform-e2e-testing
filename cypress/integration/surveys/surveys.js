import {When, Then} from "cypress-cucumber-preprocessor/steps"

When ('I navigate to Surveys page',() =>{
	cy.wait(10000)
	cy.contains('Settings').click({force: true})
	cy.wait(10000)
	cy.contains('Surveys').click()
})

Then ('I can create a Survey', ()=> {
	cy.contains('New Survey').click()

	cy.get('#survey_name').type('Automated Survey')
	cy.get('#survey_description').type('Automated Description')


	//add survey fields
	//title field
	cy.get('#survey-build-post > .listing > :nth-child(2) > .listing-item-primary > .listing-item-title').click()
	cy.get('#field-name').type('Automated Title')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(2)').contains('TitleAutomated Title')


	//description field
	cy.get('#survey-build-post > .listing > :nth-child(3) > .listing-item-primary > .listing-item-title').click()
	cy.get('#field-name').type('Automated Description')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(3)').contains('Automated Description')


	//short text field
	cy.contains('Add field').click()
	cy.contains('Short text').click()
	cy.get('#field-name').type('Automated Short Text Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(4)').contains('Automated Short Text Field')

	//long text field
	cy.contains('Add field').click()
	cy.contains('Long text').click()
	cy.get('#field-name').type('Automated Long Text Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(5)').contains('Automated Long Text Field')

	//number(decimal) field
	cy.contains('Add field').click()
	cy.contains('Number (Decimal)').click()
	cy.get('#field-name').type('Automated Decimal Number Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(6)').contains('Automated Decimal Number Field')

	//number(integer field)
	cy.contains('Add field').click()
	cy.contains('Number (Integer)').click()
	cy.get('#field-name').type('Automated Number Integer Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(7)').contains('Automated Number Integer Field')

	//Location field
	cy.contains('Add field').click()
	cy.contains('Location').click()
	cy.get('#field-name').type('Automated Location Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(8)').contains('Automated Location Field')

	//Date Field
	cy.contains('Add field').click()
	cy.contains('Date').click()
	cy.get('#field-name').type('Automated Date Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(9)').contains('Automated Date Field')


	//Date & Time Field
	cy.contains('Add field').click()
	cy.contains('Date & Time').click()
	cy.get('#field-name').type('Automated Date & Time Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(10)').contains('Automated Date & Time Field')

	// Radio Field
	cy.contains('Add field').click()
	cy.contains('Radio Button(s)').click()
	cy.get('#field-name').type('Automated Radio Buttons Field')
	
	cy.get('.button-secondary').click() //click Add button to add radio field
	cy.get('[placeholder="Option 1"]').type('Radio 1') //puts a value in the radio field

	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(11)').contains('Automated Radio Buttons Field')

	

	//Checkbox Field
	cy.contains('Add field').click()
	cy.contains('Checkbox(es)').click()
	cy.get('#field-name').type('Automated Checkboxes Field')

	cy.get('.button-secondary').click() //click Add button to add radio field
	cy.get('[placeholder="Option 1"]').type('Radio 1') //puts a value in the radio field

	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(12)').contains('Automated Checkboxes Field')

	//Related Post Field
	cy.contains('Add field').click()
	cy.contains('Related Post').click()
	cy.get('#field-name').type('Automated Related Post Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(13)').contains('Automated Related Post Field')


	//Image Field
	cy.contains('Add field').click()
	cy.contains('Image').click()
	cy.get('#field-name').type('Automated Image Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(14)').contains('Automated Image Field')


	//Embed Video
	cy.contains('Add field').click()
	cy.contains('Embed video').click()
	cy.get('#field-name').type('Automated Embeded Video Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(15)').contains('Automated Embeded Video Field')


	//Categories
	cy.contains('Add field').click()
	cy.contains('Categories').click()
	cy.get('#field-name').type('Automated Categories Field')
	cy.contains('Add & close').click()
	cy.get('#survey-build-post > .listing > :nth-child(16)').contains('Automated Categories Field')

	


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

Then ('I can delete a Survey', ()=>{
	cy.get(':nth-child(17) > .dropdown > .button-beta').click()
	cy.get(':nth-child(17) > .dropdown > .dropdown-menu > :nth-child(2) > a > .label').click()
	cy.get('input[name="survey"]').type('Automated Survey')
	cy.contains('Delete this survey').click()

	//confirm survey doesn't exist anymore

})
