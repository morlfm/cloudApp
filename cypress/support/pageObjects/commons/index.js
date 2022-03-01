const el = require('./elements').ELEMENTS
class Commons { 

  visitPage(page) { 
    cy.visit(page)
    cy.url().should('include', page);
  }
  acceptCookies() {
      cy.get(el.cookies).click()
  }
} 

export default new Commons();