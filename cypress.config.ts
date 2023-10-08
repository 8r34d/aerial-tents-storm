import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
// @ts-ignore
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  env: {
    // api_booker: "https://restful-booker.herokuapp.com",
    api_booker: "http://localhost:3001",
  },
  e2e: {
    baseUrl: "https://react-shopping-cart-67954.firebaseapp.com/",
    specPattern: "**/*.feature", // ["**/*.feature", "**/*.cy.ts"],
    viewportWidth: 1920,
    viewportHeight: 1080,
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
});
