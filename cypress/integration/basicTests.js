/// <reference types="cypress"/>

//run basic tests on nakdan live

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://nakdanlive.dicta.org.il/')
    })
    
    it('Modern nakdan',()=>{
        cy.get('[placeholder="הזן טקסט כאן"]').type('משה')
        cy.get('[id="nikud-text"]').should('contain','מֹשֶׁה')
    })

})