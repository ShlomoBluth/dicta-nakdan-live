


Cypress.Commands.add('nakdanLiveRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept(url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  })
  if(message.length>0){
    cy.get('small').contains(message).should('not.exist')
  }
  cy.get('[placeholder="הזן טקסט כאן"]').clear().type('מש')
  
  if(delaySeconds>0){
    cy.get('[class*=spinner]',{timeout:1000*delaySeconds}).should('not.exist')
  }else{
    cy.get('[class*=spinner]').should('not.exist')
  }
  if(message.length>0){
    cy.get('small').contains(message).should('exist')
  }
})   
  
 