/// <reference types="Cypress" />


describe('My First test Suit', function() 
{

    before(function(){
        cy.fixture('example').then((data) =>{  // burada fixture file kullaniyoruz burasi datalarin bulundugu yer config file gibi . hangi fixtureden  geliyor birde ad veriyoruz
        this.data = data                  // burada da this diye initialize etmemmiz gerek ki heyryerde kullanabilelim
        })
    })

    it('fill up form with fixture file', function(){   
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value' , this.data.name)  // verify yukarida yazilan ismin asagida da cikmasi 
        cy.get('input[name="name"]:nth-child(2)').should('have.attr' , 'minlength', '2')   // burada POM icerisinde , minlenght diye bir attribute var  onun degerinin 2 olup olmadigi  , bazen en az 5 karakter yazman gerek derse
        cy.get('#inlineRadio3').should('be.disabled')   //burada da disable yada enable olup olmadigini test
    })  



    it('shop smthng with method', function(){   
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        cy.selectProduct('Blackberry')  // burada method olusturuldu commands icerisinde ayni isimle cagirdik
        
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })
    })  






})

