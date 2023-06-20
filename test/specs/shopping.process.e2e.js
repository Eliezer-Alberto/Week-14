import LoginPage from '../pageobjects/login.page.js';

describe('Shopping Process', () => {
    beforeAll(async () => {
        await browser.setWindowsSize (1920, 1080);
        await browser.url('https://www.saucedemo.com/')
    });
    describe('Successful Login', () => {
        it('Verify Correct Login Process', async () => {
            await expect(LoginPage.userNameInput).toBeDisplayed();
            await LoginPage.login('standard_user', 'secret_sauce');
            await LoginPage.loginBtnClick();
        });
        it('Navegate Inventory Page', () => {

        });
    });

});