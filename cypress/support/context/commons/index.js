
class Commons { 
  page = 'https://share.getcloudapp.com';

  visitPage(page) { 
    cy.visit(page);
    cy.url().should('include', page);
  }
} 

export default new Commons();