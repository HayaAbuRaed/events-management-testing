import { defineConfig } from "cypress";
import { setupNodeEvents } from "@plugins/setupNodeEvents";

export default defineConfig({
  e2e: {
    baseUrl: "https://devcobalt.restaurant365.com",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
});
