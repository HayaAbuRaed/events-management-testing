import "./commands";

  Cypress.on("uncaught:exception", (err) => {
    if (
      err.message.includes("postMessage") ||
      err.message.includes("Failed to read a named property 'Cypress' from 'Window'") ||
      err.message.includes("ResizeObserver loop completed with undelivered notifications")
    ) {
      return false;
    }
  });
