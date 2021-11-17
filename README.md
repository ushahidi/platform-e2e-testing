# Getting started

# For Cypress
Run `npm install` in your directory to install all dependencies.

Installing Cucumber
You'll need to install cucumber to be able to run the feature files. Install cucumber by running
`npm install --save-dev cypress-cucumber-preprocessor`
For more information on cucumber: 
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

Once cucumber is installed, add it to your plugins. Go to your index.js file in the location `cypress/plugins/index.js` and add the following code

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

Add support for feature files to your Cypress configuration which is the file cypress.json
Add the code
`{
"testFiles": "**/*.feature"
}`

Create the file `cypress.env.json` in your parent directory. This will have your login credentials that will then be refered to when the tests run.

To run cypress
`cypress open`

From the Cypress interface you can access the Platform.js test file. Click on it to run the tests.

Note that the cypress test GUI, when running, opens the browser(viewport) with default width and height configurations as:
`{
  "viewportWidth": 1000,
  "viewportHeight": 660
}`
This minimised browser windows causes some fields to not be visible and you'll have to use force `{force: true}` for clicks to be possible. To get around this, edit your viewports Height and Width in your `cypress.json` file to match your viewing device as:
`{
  "viewportWidth": 1280,
  "viewportHeight": 960
}`
