import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../../../support/PageObjects/HomePage.cy"
import ProductPage from "../../../../support/PageObjects/ProductPage.cy"

const homePage = new HomePage()
const productPage = new ProductPage()

Given('I open ecommerce page', () => {
    cy.visit(Cypress.env('baseUrl') + "/angularpractice/")
})

When('I add items to Cart', function () {
    homePage.getShopTab().click()
    this.data.productName.forEach(function (element) {
        cy.selectProduct(element)
    })
    productPage.checkOutButton().click()
})

And('validate the total prices', () => {
    var sum = 0
    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
        const amount = $el.text()
        var actualSplited = amount.split(" ")
        actualSplited = actualSplited[1].trim()
        sum = sum + Number(actualSplited)
    }).then(function () {
        cy.log(sum)
    })

    cy.get('h3 strong').then(function (element) {
        const amount = element.text()
        var actualSplited = amount.split(" ")
        var total = actualSplited[1].trim()
        expect(Number(total)).to.equal(sum)
    })
})


Then('select the country submit and verify Success', () => {
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true})
    cy.get('input[type = "submit" ]').click()
    cy.get('.alert').then(function (element) {
        const actualText = element.text()

        expect(actualText.includes("Success")).to.be.true
    })

})