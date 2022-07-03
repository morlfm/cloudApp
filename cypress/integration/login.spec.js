import  { INVALIDINPUTELEMENTS } from '../support/context/commons/elements';
import { GENERATEEMAIL } from '../support/context/commons/utils';
import commons from '../support/context/commons/utils';

const testEmail = GENERATEEMAIL();
const errorMessage = 'Invalid email / password combination';

describe('Login', () => { 

  beforeEach(() => {
    commons.visitPage('/');
  });

  it.only('Should login and logout successfully', () => {
    cy.login('testAutomation2@belicloud.net', '@@Test123');
    cy.logout();
  });

  it('Should not login with an non existing usser', () => {
    cy.login(testEmail, '@@Test123');
    cy.get(INVALIDINPUTELEMENTS.error).should('have.text',errorMessage);
  });
    
  it('Should not login successfully as for bad credentials', () => {
    // invalid password
    cy.login(testEmail, '23445');
    cy.get(INVALIDINPUTELEMENTS.error).should('have.text', errorMessage);
  });
});