


Cypress.Commands.add('nakdanLiveRequest',({status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', '/api', {
    delayMs:1000*delaySeconds,
    statusCode: status
  }).as('api')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('[placeholder="הזן טקסט כאן"]').type('מש')
  
  if(message.length>0){
    cy.contains(message,{timeout:1000*delaySeconds+30000}).should('exist')
  }
})   
  
 