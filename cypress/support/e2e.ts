import "./commands";

Cypress.on("uncaught:exception", (err) => {
  if (
    err.message.includes("postMessage") ||
    err.message.includes("Failed to read a named property 'Cypress' from 'Window'")
  ) {
    return false;
  }
});
