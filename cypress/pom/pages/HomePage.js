class HomePage {
    // Web elements
    get signInButton() {
        return cy.get('.header_signin');
    }

    // Methods
    visit() {
        cy.visit('/');
    }

    openSignInForm() {
        this.signInButton.click();
    }
}

export default new HomePage();