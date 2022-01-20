/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
import LoginMethods from "../pageMethods/LoginMethods";
import HomePageMethods from "../pageMethods/HomepageMethods";
import CheckoutMethods from "../pageMethods/CheckoutMethods";

describe('Demo-Varicent', () => {
    var loginMethods = new LoginMethods();
    var homePageMethods = new HomePageMethods();
    var checkoutMethods = new CheckoutMethods();

    before(function () {
		cy.fixture('datasets').then(function (data) {
			globalThis.data = data;
		});
	});

    it('As a User, I should have the ability to sign into Amazon', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        loginMethods.logoutFromAmazon();
    });

    it('As a User, I should have the ability to search for an item on Amazon', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        homePageMethods.searchProduct(globalThis.data.product1);
        homePageMethods.verifySearchResult(globalThis.data.searchResult);
    });

    it('As a User, I can lookup a review for a product', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        homePageMethods.searchProduct(globalThis.data.product2);
        homePageMethods.searchSpecficProduct(globalThis.data.selectProduct3);
        homePageMethods.searchandValidateReview(globalThis.data.criteria1);
    });

    it('As a User, I can add an item to the shopping cart', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        homePageMethods.searchProduct(globalThis.data.product3);
        homePageMethods.clickFirstSearchResult();
        homePageMethods.clickAddToCart();
        checkoutMethods.verifySuccessfullyAddedToCart();
    });

    it('As a User, I can delete an item in the shopping cart', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        homePageMethods.searchProduct(globalThis.data.product4);
        homePageMethods.clickFirstSearchResult();
        homePageMethods.clickAddToCart();
        checkoutMethods.verifySuccessfullyAddedToCart();
        checkoutMethods.verifySuccessfullyDeletedFromCart();
    });

});