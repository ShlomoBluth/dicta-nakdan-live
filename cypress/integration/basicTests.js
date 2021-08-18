/// <reference types="cypress"/>

//run basic tests on nakdan live
let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {


    describe('basicTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
        
        it('Nakdan live run',()=>{
            cy.get('[placeholder="הזן טקסט כאן"]').type('משה')
            cy.get('[id="nikud-text"]').should('contain','מֹשֶׁה')
        })
    
    })
})
