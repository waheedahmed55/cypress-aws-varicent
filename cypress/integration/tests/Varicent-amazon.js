/// <reference types="Cypress" />
/// <reference types="Cypress-xpath" />
import LoginMethods from "../pageMethods/LoginMethods";
import HomePageMethods from "../pageMethods/HomepageMethods";
import CheckoutMethods from "../pageMethods/CheckoutMethods";

describe('Demo-Varicent', () => {
    var loginMethods = new LoginMethods();
    var homePageMethods = new HomePageMethods();
    var checkoutMethods = new CheckoutMethods();

    it('As a User, I should have the ability to sign into Amazon', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        loginMethods.logoutFromAmazon();
    });

    it('As a User, I should have the ability to search for an item on Amazon', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        homePageMethods.searchProduct('hard hat');
        homePageMethods.verifySearchResult('Safety Hard Hat');
    });

    it('As a User, I can lookup a review for a product', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        homePageMethods.searchProduct('Ratchet Hard Hat');
        homePageMethods.searchSpecficProduct('Fibre-Metal by Honeywell P2AQRW11A000 Super Eight Fiber Glass Cap Style Ratchet Hard Hat with Quick-Lok, Black');
        homePageMethods.searchandValidateReview('quality');
    });

    it('As a User, I can add an item to the shopping cart', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        homePageMethods.searchProduct('safety goggles');
        homePageMethods.clickFirstSearchResult();
        homePageMethods.clickAddToCart();
        checkoutMethods.verifySuccessfullyAddedToCart();
    });

    it('As a User, I can delete an item in the shopping cart', () => {
        loginMethods.navigateToURL(Cypress.env('url'));
        loginMethods.loginToAmazon(String(Cypress.env('username')), String(Cypress.env('password')));
        homePageMethods.searchProduct('fire extinguishers');
        homePageMethods.clickFirstSearchResult();
        homePageMethods.clickAddToCart();
        checkoutMethods.verifySuccessfullyAddedToCart();
        checkoutMethods.verifySuccessfullyDeletedFromCart();
    });

});