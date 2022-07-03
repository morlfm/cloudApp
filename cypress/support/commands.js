import { COMMONELEMENTS, LOGOUTELEMENTS, SIGNUPELEMENTS } from "./context/commons/elements";
import 'cypress-file-upload';

Cypress.Commands.add('login', (email, password) => { 
  cy.get(COMMONELEMENTS.login).click({ force: true });
  cy.get(COMMONELEMENTS.email).type(email);
  cy.get(COMMONELEMENTS.pass).type(password);
  cy.get(COMMONELEMENTS.submit).click();
});

Cypress.Commands.add('logout', () => { 
  cy.get(COMMONELEMENTS.mainMenu).click();
  cy.get(LOGOUTELEMENTS.logout).click({ force: true });
  cy.get(LOGOUTELEMENTS.logoutValidation).should('have.text', 'Successfully Logged Out');
});

Cypress.Commands.add('signup', (email,password) => { 
  cy.get(COMMONELEMENTS.login).click({ force: true });
  cy.get(SIGNUPELEMENTS.hrefSignup).click({ force: true });
  cy.get(COMMONELEMENTS.email).type(email);
  cy.get(COMMONELEMENTS.pass).type(password);
  cy.get(SIGNUPELEMENTS.validateLink).click();
});
