import searchs from "../support/pageObjects/searchs"
import commons from '../support/pageObjects/commons'

describe('Searchs', () => {

    beforeEach(() => {
        commons.visitPage('/')
        commons.acceptCookies()
    })

    it('Should Search By Name', () => {
        searchs.SearchByName()
    })
    
    it('Should Sort', () => {
        searchs.Sort()
    })
    
    it('Should go through Featured Pokemnon', () => {
        searchs.FeaturedPokemon()   
    })    

    it('Should Explore More', () => {
        searchs.ExploreMore()
    })
})