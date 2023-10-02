/// <reference types="cypress"/>

//run basic tests on nakdan live
const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })
        
            it('Nakdan live run',()=>{
                cy.get('[placeholder="הזן טקסט כאן"]').type('משה')
                cy.get('[id="nikud-text"]').should('contain','מֹשֶׁה')
            })
        })
    
    })
})
