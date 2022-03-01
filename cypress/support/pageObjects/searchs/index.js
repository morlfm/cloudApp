
const el = require('./elements').ELEMENTS

class Searchs { 

  SearchByName() { 
    cy.get(el.pokedex).click()
    cy.contains('Name or Number')
    cy.get(el.searchBox).type('pikachu{enter}')
    cy.contains('Pikachu')
    cy.should('have.attr', 'class', 'tt-suggestion tt-selectable')
  }

  Sort(){ 
    cy.get(el.pokedex).click()
    cy.get(el.styledSelect).click()
    cy.get(el.value).click()
    .should('have.text', 'Highest Number (First)')
  }

  FeaturedPokemon(){
    cy.get(el.slider).click()
    cy.get(el.highlight)
    .should('have.attr', 'data-analytics-label', 'Dewott')
  }

  ExploreMore(){
    cy.get(el.exploreMore).click()
    cy.contains('Name or Number')
    cy.get(el.searchBox).type('JigglyPuff{enter}').trigger('mouseover')
    cy.contains('Jigglypuff')
    cy.should('have.attr', 'class', 'tt-suggestion tt-selectable')

  }
}

export default new Searchs();

