const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  env:
  {
    "baseUrl": "https://rahulshettyacademy.com"
  },
  reporter : "mochawesome",
  retries: {
      // Configure retry attempts for `cypress run` , burada fail olan iki defa calisacak burada degistirebilirz
      // Default is 0
      "runMode": 1,
      // Configure retry attempts for `cypress open`
      // Default is 0
      "openMode": 0
  },
  projectId: 'du4muy',
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    //specPattern:'cypress/e2e/Tests/BDD/features/*.feature'
  }
})