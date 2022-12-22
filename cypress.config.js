const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'du4muy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
