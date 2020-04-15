context(`Test the boilerplate`, function() {
   specify(`it works`, function() {
      cy.visit('/');

      cy.get('p')
         .contains('Server is saying')
         .should('exist');
   });
});
