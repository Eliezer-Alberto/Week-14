import LoginPage from '../pageobjects/login.page.js';

describe('Login Process', () => {
    beforeAll(async () => {
        await browser.setWindowsSize (1920, 1080);
        await browser.url('https://www.saucedemo.com/')
    });
    it('Verify performance_glitch_user Login', async () => {
        await expect (LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login('performance_glitch_user', 'secret_sauce');
        await LoginPage.loginBtnClick();
    });
});