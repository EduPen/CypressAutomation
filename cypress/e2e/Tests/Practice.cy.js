/// <reference types="Cypress" />

import HomePage from "../PageObjects/HomePage.cy"
import ProductPage from "../PageObjects/ProductPage.cy"

describe('My First test Suit', function() 
{
    const homePage = new HomePage()
    const productPage = new ProductPage()
   
    before(function(){
        cy.fixture('example').then((data) =>{  // burada fixture file kullaniyoruz burasi datalarin bulundugu yer config file gibi . hangi fixtureden  geliyor birde ad veriyoruz
        this.data = data                  // burada da this diye initialize etmemmiz gerek ki heyryerde kullanabilelim
        })
    })

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    })

    it('fill up form with fixture file', function(){   
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.twoWayDataBinding().should('have.value' , this.data.name)  // verify yukarida yazilan ismin asagida da cikmasi 
       // cy.pause() // bu sekilde testi durdurabiliriz burada  we can use the .debug() also
        homePage.getEditBox().should('have.attr' , 'minlength', '2')   // burada POM icerisinde , minlenght diye bir attribute var  onun degerinin 2 olup olmadigi  , bazen en az 5 karakter yazman gerek derse
        homePage.getEntrepreneaur().should('be.disabled')   //burada da disable yada enable olup olmadigini test
        homePage.getShopTab().click()
        
        this.data.productName.forEach(function(element){  // burada arraay cagirildi ve oradaki iki tane item for each ile sepete eklendi
            cy.selectProduct(element)
        })

        productPage.checkOutButton().click()

        cy.contains('Checkout').click()

        cy.get('#country').type('India')

        cy.get('.suggestions > ul > li > a').click()
       
        cy.get('#checkbox2').click({force:true})  // burada element is interactable yani  clikc etmeye calisiyor ama ustu kapali 

        cy.get('input[type = "submit" ]').click()

        cy.get('.alert').then(function(element){    //burada yaziyi aliyorurz ve veryf ediyoruz
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
        })
        
       // Cypress.config('defaultCommandTimeout', 8000)  bu eger page load uzun surecekse eklenebilir normalde bunu config filee ekledik ama bazi caseler icin ozel eklenekse o testin icine bunu koyariz
    })  


    it('shop smthng with method', function(){   

        homePage.getShopTab().click()
        cy.selectProduct('Blackberry')  // burada method olusturuldu commands icerisinde ayni isimle cagirdik

    })  


})

