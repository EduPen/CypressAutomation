/// <reference types="Cypress" />

describe('Api', function()   
{
    it('api test', function(){ 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
    cy.intercept({
        method : "GET",
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

    },{
        statusCode : 200,
        body : [{
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }]
 
    }).as('bookretrievals') // bu line ile bu api call a bir variable adi verdik
    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@bookretrievals').should(({request, response}) => {

        cy.get('tr').should('have.length', response.body.length+1)
        

    })  // burada bu call un bitmesini icin beklme
    cy.get('p').should('have.text','Oops only 1 Book available')
    })


    it('api negative test', function(){ 
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        cy.intercept('GET' , 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req)=>{
            req.url= "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res)=>{
                expect(res.statusCode).to.equal(404)

            })
        }).as("dummyUrl")
        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')
    })


    
}) // burada url i degistirdik ve authorozation kisiyi degistirdik  securty check yaptik