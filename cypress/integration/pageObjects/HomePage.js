class HomePage {
    getSearchBox() {return cy.get('#twotabsearchtextbox');}
    getSearchReview() {return cy.get('[placeholder="Have a question? Search for answers"]');}
    getCustomerReviewTab() {return cy.get('.askBtfSearchTabHeaders span:nth-child(4)');}
    getReviewResults() {return cy.get('.askHasResults');}
    getAddToCart() {return cy.get('#add-to-cart-button');}
}
export default HomePage;