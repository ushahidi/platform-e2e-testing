import { Selector } from 'testcafe'; // first import testcafe selectors

import  config from './config';
const baseUrl = config.DEPLOYMENT_URL;
fixture `Testing a deployment login and logout flow`// declare the fixture
    .page(baseUrl);  // specify the start page

const aLoginButton = Selector('a').withText('Log in');
const aLogoutButton = Selector('a').withAttribute('ng-click', 'logout()');

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
        .typeText(Selector('input#email'), config.USERNAME)
        .click(Selector('button').withText('LOG IN'))
        .expect(aLogoutButton.visible).ok();

    await t.click(aLogoutButton)
        .expect(Selector('a').withText('Log in')).ok();
});


