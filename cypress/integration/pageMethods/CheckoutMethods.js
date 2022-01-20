import CheckoutLocators from '../pageObjects/CheckoutPage';
var checkoutLocators = new CheckoutLocators();

class CheckoutMethods {

    verifySuccessfullyAddedToCart() {
        cy.findAllByText('Added to Cart').should('be.visible');
    }

    verifySuccessfullyDeletedFromCart() {
        checkoutLocators.getCart().should('be.visible').click();
        checkoutLocators.getDeleteButton().first().should('be.visible').click();
        cy.findAllByText('was removed from Shopping Cart.',{timeout:5000}).should('be.visible');
    }
}
export default CheckoutMethods;