# Getting started

# For testcafe

Run `npm install`

Add your node_modules/*/bin to your PATH so you can use testcafe and other binaries 

`export PATH=$PATH:node_modules/.bin:node_modules/*/bin`

Copy .env.example to .env
Add the username, password and deployment url to .env

run `testcafe` in your terminal

yay. Happy testing!


# For Cypress
Run `npm install cypress --save-dev` in your directory to install Cypress. More information can be found on Cypress's home page.


Create the file `cypress.env.json` in your parent directory. This will have your login credentials that will then be reffered to when the tests run.

To run cypress
`./node_modules/.bin/cypress open`

From the Cypress interface you can access the Platform.js test file. Click on it to run the tests.

Note that the cypress test GUI, when running, opens the browser(viewport) with default width and height configurations as:
`{
  "viewportWidth": 1000,
  "viewportHeight": 660
}`
This minimised browser windows causes some fields to not be visible and you'll have to use force `{force: true}` for clicks to be possible. To get around this, edit your viewports Height and Width in your `cypress.json` file as:
`{
  "viewportWidth": 1200,
  "viewportHeight": 860
}`
