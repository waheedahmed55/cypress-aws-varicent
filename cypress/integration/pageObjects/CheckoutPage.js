class CheckoutPage {
    getDeleteButton() { return cy.get('[value="Delete"]')};
    getCart() { return cy.get('#nav-cart')};
}
export default CheckoutPage;