import commons from '../support/context/commons';
import { GENERATEEMAIL } from '../support/context/commons/utils';
import { COMMONELEMENTS, INVALIDINPUTELEMENTS, SIGNUPELEMENTS }
  from "../support/context/commons/elements";

describe('Signup', () => {

  beforeEach(() => {
    commons.visitPage('/');
  });

  it('Should signup successfully', () => {
    const testEmail = GENERATEEMAIL();
    
    cy.signup(testEmail, '@@Test123');
    cy.get(SIGNUPELEMENTS.signupValidation).should('have.text', 'Account created successfully');
  });
    
  it('Should not be able to signup as for bad credentials', () => {
    const testEmail = GENERATEEMAIL();
    const errorPassText = 'Validation failed: Password must be at least 8 characters long, '+
    'contain uppercase and lowercase letters and a number.';

    cy.signup(testEmail, '2345');
    cy.get(INVALIDINPUTELEMENTS.errorAlert).should('have.text', errorPassText);
  });
});
