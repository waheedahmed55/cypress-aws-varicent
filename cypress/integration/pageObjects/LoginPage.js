class LoginPage {
    getSignInTab() {return cy.get("#nav-link-accountList");}
    getSignInButton() {return cy.get('[data-nav-ref="nav_signin"]');}
    getEmailInput(){return cy.get('#ap_email');}
    getContinueButton(){return cy.get('#continue');}
    getPasswordInput(){return cy.get('#ap_password');}
    getSignInSubmitButton(){return cy.get('#signInSubmit');}
    getSignOutButton(){return cy.get('#nav-item-signout');}
}
export default LoginPage;