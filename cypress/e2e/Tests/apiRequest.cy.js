/// <reference types="Cypress" />

describe('Api request', function(){

    it('api request test', function(){ 
        cy.request('POST' , 'http://216.10.245.166/Library/Addbook.php', {
              "name": "Zetki",
              "isbn": "zertkdo",
              "aisle": "172eh",
              "author": "Jhon foe"
        }).then(function(response){
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
        
    })

})