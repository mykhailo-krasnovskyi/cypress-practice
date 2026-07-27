class GaragePage {
    get successfulLoginMessage() {
        return cy.contains('div p', 'You have been successfully logged in').should('be.visible');
    }

}

export default new GaragePage();