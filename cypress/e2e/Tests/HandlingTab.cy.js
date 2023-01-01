/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'  //burada Iframe kullanmak icin npm install -D cypress-iframe ile insatalll ediliyor ve kullanilan yere import ediliyor

describe('Tabs window', function()   
{
    beforeEach(() => {
         cy.visit(Cypress.env('baseUrl') + "/AutomationPractice/") 
    })

    it('Tab handling', function(){  
        cy.get('#opentab').invoke('removeAttr', 'target').click() // burada child tab acmadi yan yeni browser acmadi ayni browserda devam etti
        // cypress ile DOM uzerinde degisilklik ytapilabilir manupule edilebilir WAAW
        cy.url().should('include', 'rahulshettyacademy') // burada url verification hemde substring gibi su url icinde var mi diye, super
        cy.go('back') // burada eski tab a eri geldi
    })  


    it('extra window handling', function(){  
        cy.get('#opentab').then(function(el){   // burada yeni sayfa ac diyor 
            const url = el.prop('href')  // yeni sayfanin url ini aliyor
            cy.log(url)
            cy.visit(url) // o sayfayi ayni sayfada aciyor
        })
    }) 

    it('iframe handling', function(){  
        cy.frameLoaded('#courses-iframe') // burada ifame git
        cy.iframe().find("a[href*='mentorship']").eq(0).click() // istenilen elemente git ve tikla
        cy.wait(2000)
        cy.iframe().find("h1[class*='pricing-title']") // istenilen element uzerine assert et ama her zaman cy.iframe ile kullan
                   .should('have.length' , 2)

    }) 


  
             
})
