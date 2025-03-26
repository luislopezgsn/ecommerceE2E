describe('Perfume Carousel', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000'); // Ensure the URL is correct
  
      // Intercept the requests
      cy.intercept('POST', '/api/v1/perfumes/graphql*').as('getPerfumes');
      cy.intercept('POST', '/api/v1/users/cart*').as('getCart');
    });
  
    it('should display the carousel and multiple perfume cards', () => {
      // Ensure the first .carousel is scrolled into view
      cy.get('.carousel').first().scrollIntoView();
      
      // Wait for the XHR requests to complete
      cy.wait('@getPerfumes', { timeout: 10000 });
      cy.wait('@getCart', { timeout: 10000 });
      
      // Check if the carousel exists and is visible
      cy.get('.carousel').should('exist').and('be.visible');
      
      // Check if multiple cards are displayed (ensure length is greater than 1)
      cy.get('.card')
        .should('have.length.greaterThan', 1) // Ensure there are multiple cards
        .each(($card) => {
          cy.wrap($card).within(() => {
            // Check if the card-body exists and is visible, with a timeout of 10 seconds
            cy.get('.card-body', { timeout: 10000 }).should('exist').and('be.visible');
            
            // Check if the card has an image, with a timeout of 10 seconds
            cy.get('img', { timeout: 10000 }).should('exist').and('be.visible'); 
          });
        });
    });
  });
  