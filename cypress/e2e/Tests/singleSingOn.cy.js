/// <reference types="Cypress" />
const neatCSV = require('neat-csv')

let productName
describe('Api request', () => {

    it('Single Sing on - Log in', function(){ 
        cy.visit('http://localhost:7074/dashboard')
        cy.get('h3').should('contain', 'You are not logged in and cannot access this page')
        const options = {
            method : 'POST',
            url : 'http://localhost:7075/login',
            qs : {
                redirectTo : 'http://localhost:7074/set_token'

            },
            body : {
                username: 'jane.jane',
                password: 'password123'
            },
            form : true
        }
        cy.request(options)
        cy.visit('http://localhost:7074/dashboard')
        cy.get('h1').should('contain', 'You are not logged in and cannot access this page')

    })

    it('JWT Session, is lodde in through local storage', async() => { 
        cy.LoginAPI().then(async() => {
            cy.visit("https://rehulshettyacademy.com/client", {
                onBeforeLoad : function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })

        })
        cy.get(".card-body b").eq(1).text().then(function(element){
            productName = element.text()
        })
        cy.get(".card-body button:last-of-type").eq(1).click()
        cy.get("[routerLink*='card']").click()
        cy.contains("Checkout").click()
        cy.get("[placeHolder='Country']").type('ind')
        cy.get(".ta-results button").each(($el, index, $list)=>{
            if($el.text === "India"){
                cy.wrap($el).click()
            }
        })
        cy.get(".action__submit").click()
        cy.wait(2000)
        cy.get(".order-summary button").click()

        
        cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_").then(async (text) => {
            const csv = await neatCSV(text)// ustteki ve bu step inenncsv dosyasinin java mapa ceviriyor , burada aawait de kullanilabilr acsyn ile yada .then de sii gorur
            const actualProductCSV = csv[0]["Product Name"]
            expect(productName).to.equal(actualProductCSV)
        })
        
    })
})