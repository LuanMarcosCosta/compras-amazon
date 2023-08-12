const { defineConfig } = require("cypress");
const createBundler =  require ("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  projectId: '',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportTitle: 'Loja Amazon',
      reportPageTitle: 'Loja Amazon',

    },
    baseUrl: 'https://www.amazon.com.br/',
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
        
      );
      return config;
    
    },
  },
  suppressUncaughtExceptions: true,
  defaultCommandTimeout: 60000,
  chromeWebSecurity: false,
  request: {
    failOnStatusCode: false
  
  }
  
});



