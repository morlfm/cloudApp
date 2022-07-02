class Commons { 

  visitPage(page) { 
    cy.visit(page);
    cy.url().should('include', page);
  }
  acceptCookies() {
    cy.get(el.cookies).click();
  }
} 

export default new Commons();

export const  GENERATEEMAIL = () => {

  const random = String(Math.floor(Math.random() * 1000000));
  const testEmail = 'testAutomation' + random + "@bukanimers.com";
  return testEmail;
};