/// <reference types="Cypress" />

describe('My Second test Suit', function()    // bu seleniumdaki feature gibi 
{
    it('My FirstTest case', function(){   //burasida her bir scenario yada scenario outline gibi

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

        cy.get('.search-keyword').type('ca')      // sadece css sellector kabul ediliyor

        cy.get('.products').as('productLocator') // burada locatoru su isimle kaydet ve reuse diyoruz

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => { //burada liste haline getirdik UI den gelen elementleri for each gibi

             const textVeg=$e1.find('h4.product-name').text()   // burada variable yapildi 
                
                 if(textVeg.includes('Cashews'))  // includes demek eger varsa string olarak
                 {
                    cy.wrap($e1).find('button').click() // elementlerin icinde onu bul ve tikla
                 }
        })


    })  
})

//cypris is asynchronous 