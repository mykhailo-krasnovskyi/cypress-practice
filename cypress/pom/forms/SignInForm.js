class SignInForm {

    get modalTitle() {
        return cy.contains('h4.modal-title', 'Log in');
    }

    get emailField() {
        return cy.get('#signinEmail');
    }

    get passwordField() {
        return cy.get('#signinPassword');
    }

    get loginButton() {
        return cy.get('app-signin-modal .btn-primary');
    }

    get wrongCredentialsMessage() {
        return cy.get('p.alert-danger');
    }

    get incorrectEmailMessage() {
        return cy.contains('div.invalid-feedback p', 'Email is incorrect');
    }

    get emptyPasswordMessage() {
        return cy.contains('div.invalid-feedback p', 'Password required');
    }

    get emptyEmailMessage() {
        return cy.contains('div.invalid-feedback p', 'Email required');
    }

    get forgotPasswordLink() {
        return cy.contains('.btn-link', 'Forgot password');
    }

    enterEmail(email) {
        this.emailField.type(email);
    }

    enterPassword(password) {
        this.passwordField.type(password);
    }

    clickLoginButton() {
        this.loginButton.click();
    }

    login(email, password) {
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLoginButton();
    }

    triggerErrorOnField(field) {
        field.focus();
        field.blur();
    }

    openForgotPasswordForm() {
        this.forgotPasswordLink.click();
    }
}

export default new SignInForm();