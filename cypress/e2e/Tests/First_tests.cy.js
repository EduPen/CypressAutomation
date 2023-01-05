/// <reference types="Cypress" />

describe('My First test Suit', function ()    // bu seleniumdaki feature gibi
{
    it('My FirstTest case', function () {   //burasida her bir scenario yada scenario outline gibi

        cy.visit(Cypress.env('baseUrl') + "/seleniumPractise/#/")  // burada base url e concatinate edebilirzde

        cy.get('.search-keyword').type('ca')      // sadece css sellector kabul ediliyor

        cy.get('.product:visible').should('have.length', 4)    // burada visible olan UI de gorunenler demek bazen invisible obje olabiliyor

        cy.get('.products').as('productLocator') // burada locatoru su isimle kaydet ve reuse diyoruz

        cy.get('@productLocator').find('.product').should('have.length', 4)    // burada parent atribute child atribute olayi ele alinmis

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => { //burada liste haline getirdik UI den gelen elementleri for each gibi

            const textVeg = $e1.find('h4.product-name').text()   // burada variable yapildi

            if (textVeg.includes('Cashews'))  // includes demek eger varsa string olarak
            {
                cy.wrap($e1).find('button').click() // elementlerin icinde onu bul ve tikla
            }
        })
        //assert logo text
        cy.get('.brand').should('have.text', 'GREENKART')
        //print
        cy.get('.brand').then(function (logoElement) {  //burada elementten alinan text var ama variable olarak alinca  asycn.  olmuyor bunu handle etmek icin .then methodu kullaniliyor
            cy.log(logoElement.text())
        })
        const logo = cy.get('.brand')
        cy.get('.brand').text //normalde burada texti print etmesi gerkli ama  .text() cypress commmendi olmadigi icin ve jquery commendi oldugu icin  async. olmuyor  bunuda .then() ile yukardaki gibi yapiyoruz
        //cy.log(logo.text())  

    })

    it('Verification for each ile', function () {   //burasida her bir scenario yada scenario outline gibi

        cy.visit(Cypress.env('baseUrl') + "/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')      // sadece css sellector kabul ediliyor
        cy.get('.products').as('productLocator') // burada locatoru su isimle kaydet ve reuse diyoruz
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => { //burada liste haline getirdik UI den gelen elementleri for each gibi
            const textVeg = $e1.find('h4.product-name').text()   // burada variable yapildi
            if (textVeg.includes('Cashews'))  // includes demek eger varsa string olarak
            {
                cy.wrap($e1).find('button').click() // elementlerin icinde onu bul ve tikla
            }
        })


    })
})

//cypris is asynchronous 