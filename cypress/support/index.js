// ***********************************************************
// This example support/index.js is processed and

// loaded automatically before your test files.
import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});