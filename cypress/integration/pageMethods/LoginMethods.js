import LoginLocators from '../pageObjects/LoginPage';
var loginLocators = new LoginLocators();

class LoginMethods {

    // Click on Sign In Tab
    hoverSignInTab() {
        loginLocators.getSignInTab().trigger('mouseover').should('be.visible');
    }

    // Click on Sign In Button
    clickSignInButton() {
        loginLocators.getSignInButton().should('be.visible').click();
    }

    // Enter Email Address
    enterEmailAddress(email) {
        loginLocators.getEmailInput().should('be.visible').type(email);
    }

    // Click on Continue Button
    clickContinueButton() {
        loginLocators.getContinueButton().should('be.visible').click();
    }

    // Enter Password
    enterPassword(password) {
        loginLocators.getPasswordInput().should('be.visible').type(password);
    }

    // Click on Sign In Submit Button
    clickSignInSubmitButton() {
        loginLocators.getSignInSubmitButton().should('be.visible').click();
    }

    // Click on Sign Out Button
    clickSignOutButton() {
        loginLocators.getSignOutButton().should('be.visible').click();
    }

    navigateToURL(url) {
        cy.visit(url);
    }

    // Login to Amazon
    loginToAmazon(email, password) {
        this.hoverSignInTab();
        this.clickSignInButton();
        this.enterEmailAddress(email);
        this.clickContinueButton();
        this.enterPassword(password);
        this.clickSignInSubmitButton();
    }

    // Logout from Amazon
    logoutFromAmazon() {
        this.hoverSignInTab();
        this.clickSignOutButton();
    }

}
export default LoginMethods;