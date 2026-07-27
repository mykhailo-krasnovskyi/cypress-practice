/// <reference types="cypress" />

describe('Actions with elements', () => {

    context('Inner pages', () => {
        beforeEach(() => {
            cy.visit('/');
        })

        it('Type & Clear', () => {
            cy.contains('Sign up').click();
            cy.get('#signupName').type('Hello');
            cy.get('#signupName').type('Hello');
            cy.get('#signupName').clear();
            cy.get('#signupName').type('Hello');
        })
    });
    context('Outside pages', () => {
        it('Select', () => {
            cy.visit('https://qa-automation-practice.netlify.app/dropdowns');
            cy.get('#dropdown-menu').select('Ukraine');
            cy.get('#dropdown-menu').should('have.value', 'Ukraine');
        })

        it('Check & Uncheck Checkboxes', () => {
            cy.visit('https://qa-automation-practice.netlify.app/checkboxes');
            cy.get('#checkbox1').check();
            cy.get('#checkbox2').check();
            cy.get('#checkbox3').check();
            cy.get('#checkbox1').should('be.checked');
            cy.get('#checkbox1').uncheck();
            cy.get('#checkbox1').should('not.be.checked');
        })

        it('Check & Uncheck Radio Buttons', () => {
            cy.visit('https://qa-automation-practice.netlify.app/radiobuttons');
            cy.get('#radio-button3').check();
            cy.get('#radio-button3').check();
            cy.get('#radio-button3').uncheck();
        })


        context('Table', () => {

            beforeEach(() => {
                cy.visit('http://127.0.0.1:5500/table.html');
            })

            it('Verify number of columns', () => {
                cy.get('table th').should('have.length', 3);
            })

            it('Verify headers of columns', () => {
                const headerNames = ['First Name', 'Last Name', 'Role'];
                cy.get('table th').each((header, index) => {
                    cy.wrap(header).invoke('text').should('eq', headerNames[index]);
                })
            })

            it.only('Verify value of second cell on second raw', () => {
                cy.get('tbody tr').eq(2).find('td').eq(1).should('have.text', 'Smith');
            })
        })

    })
})