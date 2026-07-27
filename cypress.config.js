const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
    video: true,
    screenshotOnRunFailure: true,
    allowCypressEnv: true,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
