class RestoreAccessForm {
    get modalTitle() {
        return cy.contains('h4.modal-title', 'Restore access');
    }
}

export default new RestoreAccessForm();