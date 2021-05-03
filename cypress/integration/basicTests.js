/// <reference types="cypress"/>

//run basic tests on nakdan live
let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {


    describe('basicTests',()=>{

        beforeEach(() => {
            if (Cypress._.isArray(size)) {
                Cypress.config({
                    viewportWidth: size[0],
                    viewportHeight: size[1]
                })
                cy.viewport(size[0], size[1])
            } else {
                Cypress.config({
                    viewportWidth: 375,
                    viewportHeight: 812
                })
                cy.viewport(size)
            }
            cy.visit('/')
        })
        
        it('Nakdan live run',()=>{
            cy.get('[placeholder="הזן טקסט כאן"]').type('משה')
            cy.get('[id="nikud-text"]').should('contain','מֹשֶׁה')
        })
    
    })
})
