const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'hy6ki2',
  viewportWidth: 1280,
  viewportHeight: 960,
  videoUploadOnPasses: false,
  defaultCommandTimeout: 20000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.feature',
  },
})
