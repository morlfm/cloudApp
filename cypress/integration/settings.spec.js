import commons from '../support/context/commons';
import { COMMONELEMENTS, INVALIDINPUTELEMENTS, SETTINGSELEMENTS } from '../support/context/commons/elements';

describe('Settings', () => {

  beforeEach(() => {
    commons.visitPage('/');
  }); 

  it('Should update my avatar', () => {
    const p = 'avatar.png';

    cy.login('testAutomation2@belicloud.net', '@@Test123');
    cy.get(COMMONELEMENTS.mainMenu).click();
    cy.get(SETTINGSELEMENTS.settings).click();
    cy.get(SETTINGSELEMENTS.avatar).attachFile(p);  
    cy.get(SETTINGSELEMENTS.uploadFile).click();
    cy.get(SETTINGSELEMENTS.validateAvatarUpload).should('contain.text', 'Account updated');
  });

  it.only('Should not update my avatar as per image size 500x 500 px', () => {
    const p = 'avatarErrorSize.png';

    cy.login('testAutomation2@belicloud.net', '@@Test123');
    cy.get(COMMONELEMENTS.mainMenu).click();
    cy.get(SETTINGSELEMENTS.settings).click();
    cy.get(SETTINGSELEMENTS.avatar).attachFile(p);  
    cy.get(SETTINGSELEMENTS.uploadFile).click();
    cy.get(INVALIDINPUTELEMENTS.errorAlert).should(
      'have.text', 'Avatar Max size is 500x500px');
  });
});