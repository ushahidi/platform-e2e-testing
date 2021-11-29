[![Tests](https://github.com/ushahidi/platform-e2e-testing/actions/workflows/run-tests.yml/badge.svg?event=push)](https://github.com/ushahidi/platform-e2e-testing/actions/workflows/run-tests.yml)
# Getting started
To run the cypress tests, you'll need to install cypress and cucumber. The tests use a BDD approach following a gherkin syntax to direct or dictate how the tests run.

# For Cypress
Run `npm install` in your directory to install all dependencies.

To install cypress, navigate to your project folder, then run:
`npm install cypress --save-dev`

More information on installing cypress: https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install

# For Cucumber
Installing Cucumber
You'll need to install cucumber to be able to run the feature files. Install cucumber by running
`npm install --save-dev cypress-cucumber-preprocessor`
For more information on cucumber: 
https://github.com/TheBrainFamily/cypress-cucumber-preprocessor

Once cucumber is installed, add it to your plugins. Go to your index.js file in the location `cypress/plugins/index.js` and add the following code:
```
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

Add support for feature files to your Cypress configuration which is the file `cypress.json`
Add the code
```
{
"testFiles": "**/*.feature"
}
```
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
