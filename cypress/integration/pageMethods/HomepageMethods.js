import HomepageLocators from '../pageObjects/HomePage';
var homepageLocators = new HomepageLocators();

class HomepageMethods {

    searchProduct(product) {
        homepageLocators.getSearchBox().should('be.visible').type(product).type('{enter}');
    }

    verifySearchResult(product) {
        let count = 0;
        cy.get('.s-search-results:nth-child(2) div:nth-child(2) h2 a span',{timeout:5000}).invoke('text').then((text) => {
            if(text.includes(product)) {
                count++;
            }
            expect(count).not.equal(0);
        });
    }

    searchSpecficProduct(product) { 
        cy.findAllByText(product).click();
    }

    searchandValidateReview(criteria) {
        cy.scrollTo('bottom');
        cy.wait(2000);
        homepageLocators.getSearchReview().should('be.visible').click().type(criteria);
        homepageLocators.getCustomerReviewTab().should('be.visible').click();
        cy.wait(2000);
        homepageLocators.getReviewResults().should('be.visible');
        cy.get('.askHasResults .matches').then(count => {
            expect(count.length).to.be.greaterThan(0);
        })
    }

    clickFirstSearchResult() {
        cy.get('.s-search-results:nth-child(2) div:nth-child(1) h2 a span').first().click({force: true});
    }

    clickAddToCart() {
        homepageLocators.getAddToCart().should('be.visible').click();
    }

}
export default HomepageMethods;