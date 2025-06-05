import { defineConfig } from "cypress";
import { setupNodeEvents } from "@plugins/setupNodeEvents";
import env from "./cypress.env.json";

export default defineConfig({
  e2e: {
    viewportWidth: 1600,
    viewportHeight: 900,
    baseUrl: env.baseUrl,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  env: {
    serviceStack: "ServiceStack/",
    netCore: "NetCore/",
  },
});
