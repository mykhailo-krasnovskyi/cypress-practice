/// <reference types="cypress" />

import HomePage from "../../../pom/pages/HomePage";
import SignInForm from "../../../pom/forms/SignInForm";
import GaragePage from "../../../pom/pages/GaragePage";
import RestoreAccessForm from "../../../pom/forms/RestoreAccessForm";
import urls from "../../../test-data/urls.json"
import colors from "../../../test-data/colors.json"

describe('Sign In Form', () => {

    let response = {
        "status": "ok",
        "data": [
            {
                "id": 531968,
                "carBrandId": 55,
                "carModelId": 11,
                "initialMileage": 125,
                "updatedMileageAt": "2026-07-27T16:50:42.000Z",
                "carCreatedAt": "2026-06-23T12:50:02.000Z",
                "mileage": 'fsafasf',
                "brand": "Ford",
                "model": "Fiesta",
                "logo": "kia.png"
            },
        ]
    }

    beforeEach(() => {
        HomePage.visit();
        HomePage.openSignInForm();
    })

    it.only('Successful Sign In', () => {
        // cy.intercept('**/cars', response);
        // cy.intercept('**/cars', (req) => {
        //     req.reply({
        //         statusCode: 500,
        //     })
        // });

        SignInForm.login(Cypress.env('MAIN_USER_EMAIL'), Cypress.env('MAIN_USER_PASSWORD'));
        GaragePage.successfulLoginMessage.should('be.visible');
        cy.url().should('eq', urls.garagePage);
    })

})