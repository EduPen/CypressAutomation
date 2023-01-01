// terminalde bir foldere test etmek icin: node_modules/.bin/cypress run --spec cypress/e2e/Tests/Table.cy.js
//terminalde tum testleri run etmek icin: node_modules/.bin/cypress run
//bu commend ile environment vaiable degistirmeden direct commend line da istenilen env  de runn edebilirsin sadece url degistirerek (headed ekledik gorebilmek icin  optunal) : node_modules/.bin/cypress run --spec cypress/e2e/Tests/Table.cy.js --env url=https://qa.rahulshettyacademy.com --headed
//Dashboard : npx cypress run --record --key 8e18b479-8284-46ab-b1ed-6db60d4bc830  


// report icin
//     npm install --save-dev mochawesome
//     npm install --save-dev mocha
//  add this in config file : reporter : "mochawesome",
//     cypress run --reporter mochawesome  yada sadece istenilen node_modules/.bin/cypress run  --reporter mochawesome --spec cypress/e2e/Tests/Table.cy.js
// npx cypress-tags run -e TAGS= "@Login"  tagb ile calistrma
