import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Properly Login Process', () => {
    beforeAll(async () => {
        await browser.setWindowsSize (1920, 1080);
        await browser.url('https://www.saucedemo.com/')
    });
    it('Verify Correct Login Process', async () => {
        await expect(LoginPage.userNameInput).toBeDisplayed();
        await LoginPage.login('standard_user', 'secret_sauce');
        await LoginPage.loginBtnClick();
    });

    describe('Logout Process', () => {
        it('Verify Correct Logout Process', async () => {
            await InventoryPage.logOutBtn.click();
        });
    });
});