/// <reference types="Cypress" />

describe('Tables', function () {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/")
    })

    it('Table Handling', function () {
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {  //burada table liste olarak alindi
            const text = $e1.text()
            if (text.includes("Python"))      // burada alinan elementlerde Pytonu bulana kadar git dendi
            {
                cy.get("tr td:nth-child(2)")   //burada bulduktanssonra sibling elemente git dendi , yan table
                    .eq(index)  // bu riradaki indexe sahip olandan
                    .next() // sonraki yani
                    .then(function (price) {  // burada orada ki degeri al
                        const priceText = price.text()  // varable olarak kaydet
                        expect(priceText).to.equal('25')  // ve verify eet dendi
                    })
            }
        })
    })

    it('Mouse hover handling', function () {
        cy.get('.mouse-hover-content').invoke('show')  // burada farenin gidecegi elementi sec
        cy.contains('Top').click()  // gidince cikanda su olana tikla
        cy.url().should('include', 'top')  // eger url de degisiklik varsa assert et onun uzerine
    })


    it('Click invisible/hidden element', function () {
        cy.contains('Reload').click({force: true})  // burada element gorunurde degil ama DOM uzerinde oynama yapilarak one getir ve click et
        cy.url().should('include', 'AutomationPractice')  // eger url de degisiklik varsa assert et onun uzerine
    })


    
})
