/// <reference types="cypress"/>

describe('Trabalhando com elementos básicos', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    //Aula 12
    it('Textos', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')

        //forma correta, todo o texto.
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    //Aula 13
    it('Campos de Textos (Textfields)', () => {
        cy.get('#formNome').type('Cypress Teste')
        cy.get('#formNome').should('have.value', 'Cypress Teste')

        cy.get('#elementosForm\\:sugestoes')
        .type('Teste de campo maior limpar')
        .should('have.value', 'Teste de campo maior limpar')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
        .type('Primeiro campo')

        cy.get('[data-cy=dataSobrenome]')
        .type('Teste12345{backspace}{backspace}', {delay: 100})
        .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
        .clear()
        .type('Erro{selectall}acerto', {delay: 100})
        .should('have.value', 'acerto')
    })

    //Aula 14
    it('RadioButton', () => {
        cy.get('#formSexoFem')
        .click()
        .should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')
        cy.get("[name=formSexo]").should('have.length', 2)
    })

    //Aula 15
    it.only('Checkbox', () => {
        cy.get('#formComidaPizza')
        .click()
        .should('be.checked')
    })

})