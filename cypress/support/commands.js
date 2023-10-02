


Cypress.Commands.add('nakdanLiveRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST','/*', {
    delay:1000*delaySeconds,
    statusCode: status
  }).as('API')
  // cy.intercept( 'POST','https://nakdan-5-1.loadbalancer.dicta.org.il/api', (req) => {
  //   // Set a delay of 1 second for the response
  //   req.reply({ 
  //     statusCode: 200,
  //     body: { data: 'some data' },
  //     responseDelay: 160000 // milliseconds
  //   });
  // });
  if(message.length>0){
    cy.get('small').contains(message).should('not.exist')
  }
  cy.get('[placeholder="הזן טקסט כאן"]').clear().type('מש')
  
  if(delaySeconds>0){
    cy.get('[class*=spinner]').should('not.exist',{timeout:1000*delaySeconds})
  }else{
    cy.get('[class*=spinner]').should('not.exist')
  }
  if(message.length>0){
    cy.get('small').contains(message).should('exist',{ timeout: 1000*delaySeconds })
  }
})   
  
 