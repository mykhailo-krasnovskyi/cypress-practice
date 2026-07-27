/// <reference types="cypress" />

describe('Sign In Form', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.get('.header_signin').click();
    })
    it('Successful Sign In', () => {
        cy.get('#signinEmail').type('michael.krasnovskyi+testUser2@gmail.com');
        cy.get('#signinPassword').type('ZSgeVQhuU3qkvlG');
        cy.get('app-signin-modal .btn-primary').click();

        cy.contains('div p', 'You have been successfully logged in').should('be.visible');
        cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    })

    it('Sign In with wrong password', () => {
        cy.get('#signinEmail').type('michael.krasnovskyi+testUser2@gmail.com');
        cy.get('#signinPassword').type('testtesttest');
        cy.get('app-signin-modal .btn-primary').click();

        cy.get('p.alert-danger').should('have.text', 'Wrong email or password');
    })

    it('Sign In with wrong email', () => {
        cy.get('#signinEmail').type('fsafasfasgagasgsag@gmail.com');
        cy.get('#signinPassword').type('ZSgeVQhuU3qkvlG');
        cy.get('app-signin-modal .btn-primary').click();

        cy.get('p.alert-danger').should('have.text', 'Wrong email or password');
    })

    it('Sign in with not valid email', () => {
        cy.get('#signinEmail').type('testtest');
        cy.get('#signinEmail').blur();

        cy.get('div.invalid-feedback p').should('have.text', 'Email is incorrect');
        cy.get('#signinEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it('Sign in without password', () => {
        cy.get('#signinPassword').focus();
        cy.get('#signinPassword').blur();

        cy.get('div.invalid-feedback p').should('have.text', 'Password required');
        cy.get('#signinPassword').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })


    it('Sign in without email', () => {
        cy.get('#signinEmail').focus();
        cy.get('#signinEmail').blur();

        cy.get('div.invalid-feedback p').should('have.text', 'Email required');
        cy.get('#signinEmail').should('have.css', 'border-color', 'rgb(220, 53, 69)');
    })

    it.only('Click Forgot Password button', () => {
        cy.contains('Forgot password').click();
        cy.contains('h4.modal-title', 'Log in').should('not.be.visible');
        cy.contains('h4.modal-title', 'Restore access').should('be.visible');
        cy.log(`michael.krasnovskyi+${Date.now()}@gmail.com`);
    })


})