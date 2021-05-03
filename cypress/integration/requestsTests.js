/// <reference types="cypress"/>

//run tests on requests from nakdan live run

let sizes = ['iphone-x',[1000, 660]]



sizes.forEach((size) => {

  describe('requestsTests',()=>{

    
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
      cy.visit('https://nakdanlive.dicta.org.il/')
    })
  
  
    it('Error message for response with a delay of 3 minutes when clicking the run button'+
    ' of nakdan live page',()=>{
      cy.nakdanLiveRequest({
        url:'api',
        message:'חיבור אינטרנט חלש, ייתכנו שיבושים במהלך הניקוד',
        delaySeconds:60*3
      })
    })
  
    
    it('Error message for response with status code 500 when clicking the run button of nakdan live page'
    ,()=>{
      cy.nakdanLiveRequest({
        url:'api',
        status:500,
        message:'חיבור אינטרנט חלש, ייתכנו שיבושים במהלך הניקוד'
      })
    })
      
  })

})

