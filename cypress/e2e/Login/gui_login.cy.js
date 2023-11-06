/// <reference types="cypress"/>


describe('Testes funcional de login', () => {
    it('Deve realizar login com sucesso', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.title').should('contain','Products')
        
    });

    it('Validando login incorreto', () => {
        cy.login_teste('incorreto','secret_sauce')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
        
    });

    it('Validar senha incorreta', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.login_teste('standard_user','incorreto')
        cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
        
    });
});