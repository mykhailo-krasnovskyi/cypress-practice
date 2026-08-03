/// <reference types="cypress" />

it('Log in', () => {
    cy.request('POST', '/api/auth/signin', {
        'email': Cypress.env('MAIN_USER_EMAIL'),
        'password': Cypress.env('MAIN_USER_PASSWORD'),
    }).then((res) => {
        expect(res.status).to.equal(200);
    })
})