/// <reference types="cypress"/>

//run tests on requests from nakdan live run

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
})

