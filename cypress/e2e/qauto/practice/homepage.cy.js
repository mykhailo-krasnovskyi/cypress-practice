/// <reference types="cypress" />

describe('Homepage practice', () => {
    it('Open homepage', () => {
        cy.visit('/');
    })

    context('Search elements', () => {
        beforeEach(() => {
            cy.visit('/');
        })

        it('cy.get', () => {
            cy.get('h1');
            cy.get('button');
            cy.get('button, a')
        })

        it('cy.contains', () => {
            cy.contains('h1', 'Do more!');
            // cy.contains('', '')
        })

        it('children', () => {
            cy.get('nav').children('a');
            cy.get('nav > a');
        })

        it('parent & parents', () => {
            cy.get('.btn.header-link.-active').parent();
            cy.get('.btn.header-link.-active').parents('div').should('have.length', 5);
        })

        it('find', () => {
            cy.get('div.header_inner').find('a');
            cy.get('div.header_inner a');
        })

        it('within', () => {
            cy.get('.btn-primary').click();
            cy.get('app-signup-modal').within(() => {
                cy.get('.btn-primary');
            })
        })

        it('closest', () => {
            cy.get('h1').closest('div');
        })

        it('not', () => {
            cy.get('button').not('.header-link');
        })

        it('invoke', () => {
            cy.get('h1').invoke('hide');
            cy.wait(3000);
            cy.get('h1').invoke('show');
            cy.wait(2000);
            cy.get('h1').invoke('text').should('eq', 'Do more!');
        })

        it('then', () => {
            cy.get('h1').invoke('text').then((h1Text) => {
                cy.log('H1 Text:');
                cy.log(h1Text);
            })
        })

        it('wrap', () => {
            cy.get('h1').invoke('text').then((h1Text) => {
                const newText = h1Text.toUpperCase();
                cy.log(newText);
                cy.wrap(newText).should('eq', 'DO MORE!');
            })
        })

        it.only('alias', () => {
            cy.get('.btn-primary').as('signUpButton');
            cy.get('@signUpButton').click();
        })

        context('Multiple elements', () => {
            it('first & last', () => {
                cy.get('.socials_link');
                cy.get('.socials_link').first();
                cy.get('.socials_link').last();
            })

            it('eq', () => {
                cy.get('.socials_link').eq(2);
            })

            it('each', () => {
                cy.get('.btn-primary').click();
                cy.get('input').each((input) => {
                    cy.wrap(input).type('TEST');
                })
            })
        })


    })
})
