/// <reference types="cypress" />

import HomePage from "../../pom/pages/HomePage";
import SignInForm from "../../pom/forms/SignInForm";
import GaragePage from "../../pom/pages/GaragePage";
import RestoreAccessForm from "../../pom/forms/RestoreAccessForm";
import urls from "../../test-data/urls.json"
import colors from "../../test-data/colors.json"

describe('Sign In Form', () => {

    beforeEach(() => {
        HomePage.visit();
        HomePage.openSignInForm();
    })

    it.only('Successful Sign In', () => {
        SignInForm.login(Cypress.env('MAIN_USER_EMAIL'), Cypress.env('MAIN_USER_PASSWORD'));
        GaragePage.successfulLoginMessage.should('be.visible');
        cy.url().should('eq', urls.garagePage);
    })

    it('Sign In with wrong password', () => {
        SignInForm.login(Cypress.env('MAIN_USER_EMAIL'), 'testtesttest')

        SignInForm.wrongCredentialsMessage.should('have.text', 'Wrong email or password');
    })

    it('Sign In with wrong email', () => {
        SignInForm.login('fsafasfasgagasgsag@gmail.com', Cypress.env('MAIN_USER_PASSWORD'))

        SignInForm.wrongCredentialsMessage.should('have.text', 'Wrong email or password');
    })

    it('Sign in with not valid email', () => {
        SignInForm.enterEmail('testtest');
        SignInForm.triggerErrorOnField(SignInForm.emailField);

        SignInForm.incorrectEmailMessage.should('be.visible');
        SignInForm.emailField.should('have.css', 'border-color', colors.wrongDataBorderColor);
    })

    it('Sign in without password', () => {
        SignInForm.triggerErrorOnField(SignInForm.passwordField);

        SignInForm.emptyPasswordMessage.should('be.visible');
        SignInForm.passwordField.should('have.css', 'border-color', colors.wrongDataBorderColor);
    })


    it('Sign in without email', () => {
        SignInForm.triggerErrorOnField(SignInForm.emailField);

        SignInForm.emptyEmailMessage.should('be.visible');
        SignInForm.emailField.should('have.css', 'border-color', colors.wrongDataBorderColor);
    })

    it('Click Forgot Password button', () => {
        SignInForm.openForgotPasswordForm();

        SignInForm.modalTitle.should('not.be.visible');
        RestoreAccessForm.modalTitle.should('be.visible');
    })

})