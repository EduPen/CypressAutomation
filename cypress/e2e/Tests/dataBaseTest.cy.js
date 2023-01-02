/// <reference types="Cypress" />

describe('Database',() => 
{
    
    it('Data base testing', () => {  
       cy.sqlServer("select * from Personas").then(function(result){
        console.log(result[1][3])
       })
    }) 
    
   // data base connection ayarlarinda eksik var 
   // https://www.npmjs.com/package/cypress-sql-server
})
