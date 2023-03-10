
// -- This is a parent command --
Cypress.Commands.add("selectProduct", (productName) => {
    cy.get('h4.card-title').each(($el, index, $list) =>{
        if($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
    })
})

Cypress.Commands.add("LoginAPI", () => {
    cy.request("POST", 
               "https://rehulshettyacademy.com/api/ecom/quth/login", 
               {"userEmail":"rahulshetty@gmal.com", "userPassword":"Iamking@00"
            }).then(function(response){
                expect(response.status).to.eq(200)
                Cypress.env('token' , response.body.token)
            })
})

Cypress.Commands.add("PEGA_returns_to_NBA", () => {
    cy.request('POST', 'https://kinltd-eurodc-stg1.pega.net/prweb/api/PegaMKTContainer/V3/Container', {
        "SubjectID": "137480004",
        "ContainerName": "NBA",
        "ContextName": "Customer",
        "Channel": "Web",
        "Direction": "Inbound",
        "Placements": "",
        "Contexts": [{
            "Type": "",
            "Value": "casino",
            "Key": "path"
        }],
    }).then(function (response) {
        expect(response.body).to.have.property("SubjectID", "137480004")
        expect(response.status).to.eq(200)
    })
})
 
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })