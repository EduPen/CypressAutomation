const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  env:
  {
    "automationPracticeUrl": "https://rahulshettyacademy.com/AutomationPractice/",
    "angularPracticeUrl": "https://rahulshettyacademy.com/angularpractice/",
    "seleniumPractiseUrl": "https://rahulshettyacademy.com/seleniumPractise/#/"
  },

  projectId: 'du4muy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})