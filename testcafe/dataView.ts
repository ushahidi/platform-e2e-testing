import { Selector } from 'testcafe'; // first import testcafe selectors
import { ClientFunction } from 'testcafe';

import  config from './config';
const baseUrl = config.DEPLOYMENT_URL;
fixture `Testing a deployment login and logout flow`// declare the fixture
    .page(baseUrl);  // specify the start page

const aLoginButton = Selector('a').withText('Log in');
const aLogoutButton = Selector('a').withAttribute('ng-click', 'logout()');
const settingsButton = Selector('a').withText('Settings');
const generalButton = Selector('a').withText('General');
const surveysButton = Selector('a').withText('Surveys');
const dataButton = Selector('a').withText('Data Sources');
const importButton = Selector('a').withText('Import');
const exportButton = Selector('a').withText('Export data');
const usersButton = Selector('a').withText('Users');
const rolesButton = Selector('a').withText('Roles');
const categoriesButton = Selector('a').withText('Categories');
const webHooksButton = Selector('a').withText('Webhooks');
const plansButton = Selector('a').withText('Plans');

const getLocation = ClientFunction(() => window.location.href);
const goBack = ClientFunction(() => window.history.back());

// then create a test and place your code there
test('Check there is an email and password field after clicking the login button', async t => {

    await t
        .click(aLoginButton)
        .expect(Selector('input#password').exists).ok()
        .expect(Selector('input#email').exists).ok()
        .expect(Selector('button').withText('CANCEL').exists).ok();
});

test('Check we can submit a login form, login, and logout', async t => {
    await t
        .click(aLoginButton)
        .typeText(Selector('input#password'), config.PASSWORD)
        .typeText(Selector('input#email'), config.EMAIL, {paste:true}) 
        .click(Selector('button').withText('LOG IN'))
        .expect(aLogoutButton.visible).ok();


//go into settings and verify all links in settings page work
    await t
        .click(settingsButton)

        .expect((generalButton).exists).ok()
        .click(generalButton);
        
        await goBack();

    await  t
        .expect(surveysButton.exists).ok()
        .click(surveysButton);  
      await goBack();
    
    await t
        .expect(dataButton.exists).ok()
        .click(dataButton);
        await goBack();
        
    await t
        .expect(importButton.exists).ok()
        .click(importButton);
        await goBack();

    await t
        .expect(exportButton.exists).ok()
        .click(exportButton)
        await goBack(); 

    await t
        .expect(usersButton.exists).ok()
        .click(usersButton);
        await goBack();

    await t
        .expect(rolesButton.exists).ok()
        .click(rolesButton);
        await goBack();

    await t
        .expect(categoriesButton.exists).ok()
        .click(categoriesButton);
        await goBack();

    await t
        .expect(webHooksButton.exists).ok()
        .click(webHooksButton);
        await goBack();

    await t
        .expect(plansButton.exists).ok()
        .click(plansButton);

    await t.click(aLogoutButton)
        .expect(Selector('a').withText('Log in')).ok();
});


