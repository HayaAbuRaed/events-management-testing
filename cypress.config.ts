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
    dueFromGLAccount: "c666009f-d41d-4cbb-9b82-076d4f27701f",
    dueToGLAccount: "b7da0489-b99a-4558-8da3-0c58c4c506ac",
  },
});
