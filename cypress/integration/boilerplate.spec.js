context(`Test the boilerplate`, function() {
   specify(`it works`, function() {
      cy.visit('/');

      cy.get('p')
         .contains('The API is saying')
         .should('exist');
   });
});
