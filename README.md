# Getting started

# For Cypress
Run `npm install` in your directory to install all dependencies.


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
