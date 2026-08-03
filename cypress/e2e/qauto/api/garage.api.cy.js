/// <reference types="cypress" />

describe('Garage tests', () => {
    describe('Get brands and models', () => {
        it('Get all brands 1', () => {
            cy.request('GET', '/api/cars/brands').then((res) => {
                expect(res.status).to.equal(200);
                expect(res.body.data).to.have.length(5);
            })
        })
    })

    describe('Add cars', () => {
        let sid;
        let addedCars = [];

        before(() => {
            cy.request('POST', '/api/auth/signin', {
                'email': Cypress.env('MAIN_USER_EMAIL'),
                'password': Cypress.env('MAIN_USER_PASSWORD'),
            }).then((res) => {
                expect(res.status).to.equal(200);
                sid = JSON.stringify(res.headers['set-cookie']).split(';')[0].split('=')[1];
            })
        })

        after(() => {
            cy.log(addedCars);
            addedCars.forEach((id) => {
                cy.request({
                    method: 'DELETE',
                    url: `/api/cars/${id}`,
                    headers: {
                        'Cookie': `sid=${sid}`
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200);
                    expect(res.body.data.carId).to.eq(id);
                })
            })
        })

        it('Add BMW X5 to Garage', () => {
            cy.request({
                method: 'POST',
                url: '/api/cars',
                body: {
                    'carBrandId': 2,
                    'carModelId': 6,
                    'mileage': 999
                },
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }).then((res) => {
                expect(res.status).to.eq(201);
                expect(res.body.data.brand).to.eq('BMW');
                expect(res.body.data.model).to.eq('3');
                addedCars.push(res.body.data.id);
            })
        })

        it('Add Audi TT to Garage', () => {
            cy.request({
                method: 'POST',
                url: '/api/cars',
                body: {
                    'carBrandId': 1,
                    'carModelId': 1,
                    'mileage': 999
                },
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }).then((res) => {
                expect(res.status).to.eq(201);
                expect(res.body.data.brand).to.eq('Audi');
                expect(res.body.data.model).to.eq('TT');
                addedCars.push(res.body.data.id);
            })
        })

        it('Add Porsche 911 to Garage', () => {
            cy.request({
                method: 'POST',
                url: '/api/cars',
                body: {
                    'carBrandId': 4,
                    'carModelId': 16,
                    'mileage': 999
                },
                headers: {
                    'Cookie': `sid=${sid}`
                }
            }).then((res) => {
                expect(res.status).to.eq(201);
                expect(res.body.data.brand).to.eq('Porsche');
                expect(res.body.data.model).to.eq('911');
                addedCars.push(res.body.data.id);
            })
        })
    })
})
