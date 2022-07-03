
class Commons { 
  page = 'https://share.getcloudapp.com';
  
  visitPage(page) { 
    cy.visit(page);
    cy.url().should('include', page);
  }
} 

export default new Commons();

export const  GENERATEEMAIL = () => {

  const random = String(Math.floor(Math.random() * 1000000));
  const testEmail = 'testAutomation' + random + "@bukanimers.com";
  return testEmail;
};
