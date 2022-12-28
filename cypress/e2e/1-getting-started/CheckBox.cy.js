/// <reference types="Cypress" />

describe('Type of Web elements Handling ', function()   
{

    it('CheckBox handling', function(){  
        cy.get('#checkBoxOption1').check()
                                  .should('be.checked')
                                  .and('have.value', 'option1') // burada check box u check yap ve verify etmek icin
        cy.get('#checkBoxOption1').uncheck()
                                  .should('not.be.checked')  // burada da uncheck ve verification
        cy.get('input[type="checkbox"]').check(['option2','option3']) // burada multiple checkboz secmek icin , once fateher locator
                                
    })  

    it('Static DropDawn', function(){  
        cy.get('select').select('option2')  // burada dropdawn secmek icin
                        .should('have.value','option2')  // burada secili oldugunu verify etmek icin
                                
    })  

    it('Dynamic DropDawn', function(){  
        cy.get('#autocomplete').type('ind') // burada text boxa kisaca yaz
        cy.get('.ui-menu-item div').each(($e1, index, $list) => { //burada liste haline getirdik UI den gelen elementleri for each gibi
            if($e1.text()==="India"){ //ve burada India olani bul ve tikla
                cy.wrap($e1).click() 
            }
       })
       cy.get('#autocomplete').should('have.value', "India")
                                
    })  

    it('Visable or Invisable Object', function(){  
        cy.get('#displayed-text').should('be.visible')  // burada visible or not visible checking
        cy.get('#hide-textbox').click
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click
        cy.get('#displayed-text').should('be.visible')
                                
    })  

    it('Radio Buttons', function(){  
        cy.get('[value="radio2"]').check()
                                  .should('be.checked')

    })    

    it('Popups Handling', function(){  
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click() // if ther eis an alert, cypress automatically handle , click or confirm
        //window:alert
        cy.on('window:alert', (str)=>{  // burada eger bir alertin  textii verify edilecekse 
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        //window:confirm
        cy.on('window:confirm', (str)=>{  // burada eger bir alertin  textii verify edilecekse 
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })    

  
           
})
