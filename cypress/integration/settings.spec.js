import commons from '../support/context/commons';
import { SETTINGSELEMENTS } from '../support/context/commons/elements';

describe('Settings', () => {

  beforeEach(() => {
    commons.visitPage('/');
  }); 

  it.only('Should update my avatar', () => {
    const p = 'avatar.png';

    cy.login('testAutomation2@belicloud.net', '@@Test123');
    cy.get(SETTINGSELEMENTS.settings).click();
    cy.get(SETTINGSELEMENTS.avatar).click();
    // upload image 
    cy.get('#file-upload').attachFile(p);  
    cy.get('#file-submit').click();
    cy.get('#uploaded-files').contains('Picture');
  });

  it('Should not update my avatar as per image size 500x 500 px', () => {

  });
});