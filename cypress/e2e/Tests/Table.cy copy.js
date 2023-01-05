/// <reference types="Cypress" />

describe('Tables', function () {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/")
    })

    it('Table Handling', function () {
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {  //burada table liste olarak alindi
            cy.PEGA_returns_to_NBA()
        })
    })

   


    
})
