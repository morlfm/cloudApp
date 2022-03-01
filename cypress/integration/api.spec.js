
describe('API Testing', () => { 
    
    it('validate status code Ok', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1/')
        .its('status')
        .should('eq', 200) 
    })
    
    it('validate json response', () => {
        cy.request('https://pokeapi.co/api/v2/version/2').as('poke')
        cy.get('@poke').should((response) => {
        expect(response.body).to.have.property('name', 'blue')
        })
    })
})