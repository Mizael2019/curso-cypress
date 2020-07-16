/// <reference types="cypress"/>

describe('Cypress - Testes módulo 2', () => {
    it('Devo visitar página e fazer assertiva no título', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().should('be.equal', 'Campo de Treinamento')
        .and('contain', 'Campo')
    })

    // cy.pause

    it('Encontrar e interagir com elemento', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
    })






})

//https://wcaquino.me/cypress/componentes.html