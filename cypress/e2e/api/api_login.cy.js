/// <reference types="cypress"/>


describe('API - Teste funcional de login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body:{
                "email": "fulano@qa.com",
                "password": "teste"

            }

        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
        
    });
});