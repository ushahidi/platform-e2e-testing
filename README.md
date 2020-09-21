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
