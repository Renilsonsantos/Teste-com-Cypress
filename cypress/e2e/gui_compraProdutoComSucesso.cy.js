/// <reference types="cypress"/>


describe('teste E2E - Realizando a compro de produtos com sucesso', () => {
    it('Fluxo da compra de peodutos', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]'). type("standard_user")
        cy.get('[data-test="password"]'). type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain','Products')

        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

        cy.get(':nth-child(1) > .inventory_item_description').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(2) > .inventory_item_description').should('contain','Sauce Labs Bike Light')
        cy.get(':nth-child(3) > .inventory_item_description').should('contain','Sauce Labs Bolt T-Shirt')

        cy.contains('Sauce Labs Onesie').click()
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.get('.shopping_cart_link').should('have.text','3')

        cy.get('.shopping_cart_link').click()
        cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain','Sauce Labs Bike Light')
        cy.get('.cart_list > :nth-child(5)').should('contain','Sauce Labs Bolt T-Shirt')

        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Primeiro nome')
        cy.get('[data-test="lastName"]').type('ultimo nome')
        cy.get('[data-test="postalCode"]').type('1234456')
        cy.get('[data-test="continue"]').click()

        cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain','Sauce Labs Bike Light')
        cy.get('.cart_list > :nth-child(5)').should('contain','Sauce Labs Bolt T-Shirt')
        cy.get('.summary_total_label').should('have.text','Total: $36.69')
        cy.get('[data-test="finish"]').click()

        cy.get('.complete-header').should('have.text','Thank you for your order!')




    });
});