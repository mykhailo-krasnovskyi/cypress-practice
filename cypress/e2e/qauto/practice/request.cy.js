/// <reference types="cypress" />

it('Get all brands 1', () => {
    cy.api('GET', '/api/cars/brands').then((res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.have.length(5);
    })
})


it('Get all brands 2', () => {
    cy.api('GET', '/api/cars/brands').then((res) => {
        cy.wrap(res.status).should('equal', 200);
        cy.wrap(res.body.data).should('have.length', 5);
    })
})

it('Get all brands 3', () => {
    cy.api('GET', '/api/cars/brands').its('status').should('equal', 200);
})

