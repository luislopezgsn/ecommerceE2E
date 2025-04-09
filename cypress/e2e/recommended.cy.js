describe('Perfume Card Test', () => {
    beforeEach(() => {
      // Visit the page that contains the perfume card
      cy.visit('http://localhost:3000'); // Update the URL as needed
    });
  
    it('should display the perfume card correctly', () => {
      // Check if the perfume card is visible
      cy.get('.card').should('be.visible');
  
      // Check if the perfume name is displayed
      cy.get('.card-body h5').should('exist');
  
      // Check if the perfume brand is displayed
      cy.get('.card-body h6').first().should('exist');
  
      // Check if the perfume image exists and is visible
      cy.get('.card img').should('have.attr', 'src').and('exist');
      
      // Check if the price is displayed correctly
      cy.get('.card-body h6 span').should('exist');
  
      // Check if the rating system is visible
      cy.get('.dv-star-rating').should('be.visible');
  
      // Optionally check if the "SHOW MORE" button is working
      cy.get('#Aventus').should('be.visible').click();
      cy.url().should('include', '/product/34');
    });
  
    it('should allow selecting a star rating', () => {
      // Check if the 5-star rating is selected by default
      cy.get('#star_5').should('be.checked');
  
      // Check if selecting a lower rating works
      cy.get('#star_4').click().should('be.checked');
      cy.get('#star_5').should('not.be.checked');
    });
  });
  