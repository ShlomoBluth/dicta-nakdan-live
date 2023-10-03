const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  projectId: 'if6x7a',
  screenshotOnRunFailure: false,
  defaultCommandTimeout: 600000,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'dicta-shared/reporter-config.json',
  },
  env: {
    DEV_URL: 'https://dev--nakdanlive.netlify.app/',
    LIVE_URL: 'https://nakdanlive.dicta.org.il/',
    TOOL_TESTS: true,
    REQUESTS_TESTS: true,
    RECORD_KEY: 'bb3977f6-0a80-4de1-98d3-89009fb84af6',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://dev--nakdanlive.netlify.app/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,json}',
  },
})
