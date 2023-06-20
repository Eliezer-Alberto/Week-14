class InventoryPage {
    get asideBtn() {
        return $('#react-burger-menu-btn')
    };
    get crossBtn() {
        return $('#react-burger-cross-btn')
    };
    get firstItem() {
        return $('#item_4_title_link > div')
    };
    get addToCart() {
        return $('#add-to-cart-sauce-labs-backpack')
    };
    get backToProducts() {
        return $('#back-to-products')
    };
    get secondItem() {
        return $('#item_0_title_link > div')
    };
    get add2Cart() {
        return $('#add-to-cart-sauce-labs-bike-light')
    };
    get shoppingCart() {
        return $('#shopping_cart_container > a')
    };
    get checkout() {
        return $('#checkout')
    };
    get firstName() {
        return $('#first-name')
    };
    get lastName() {
        return $('#last-name')
    };
    get postalCode() {
        return $('#postal-code')
    };
    get continueBtn() {
        return $('#continue')
    };
    get finishBtn() {
        return $('#finish')
    };
    get backHomeBtn() {
        return $('#back-to-products')
    };
    get logOutBtn() {
        return $('#logout_sidebar_link')
    };
    async formValues (firstName, lastName, postalCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(postalCode);
    };
    async fillForm () {
        await this.checkOut.firstNameInputFill();
        await this.checkOut.lastNameInputFill();
        await this.checkOut.postalCodeInputFill();
    };
    async asideBtnClick() {
        await this.asideBtn.click();
    };
    async logOutBtnClick() {
        await this.logOutBtn.click();
    };
    async checkOutBtn () {
        await this.checkout.click();
    };
};
export default new InventoryPage