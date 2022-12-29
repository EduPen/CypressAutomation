const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  pageLoadTimeout: 30000,
  projectId: 'du4muy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})