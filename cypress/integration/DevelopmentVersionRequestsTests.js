/// <reference types="cypress"/>

//run tests on requests from nakdan live run

describe('DevelopmentVersionRequestsTests',()=>{

    
    beforeEach(() => {
      cy.visit('https://dev--nakdanlive.netlify.app/')
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