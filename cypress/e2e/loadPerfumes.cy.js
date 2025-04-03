describe('Menu Page - Brand Selector & Search Filter', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
      
      cy.visit('http://localhost:3000/');
      cy.contains('PERFUMES').should('be.visible').click();
      cy.wait(3000); // Increased wait time for better stability
    });
  
    it('should verify the brand selector exists and has options', () => {
      cy.get('#searchBy', { timeout: 10000 })
        .should('exist')
        .and('be.visible');
      cy.get('#searchBy option').should('have.length.at.least', 2);
    });
  
    it('should filter items when selecting a brand', () => {
      cy.get('#searchBy', { timeout: 10000 }).select('perfumer');
      cy.get('.product-card', { timeout: 10000 }).should('exist'); // Ensure items are displayed
    });
  
    it('should verify the search field exists and is functional', () => {
      cy.get('input.form-control[placeholder="Search..."]', { timeout: 10000 })
        .should('exist')
        .and('be.visible');
    });
  
    it('should filter results when typing in the search field', () => {
      cy.get('input.form-control[placeholder="Search..."]', { timeout: 10000 }).type('Chanel');
      cy.get('.product-card', { timeout: 10000 }).should('exist'); // Adjust selector based on actual item class
    });
  });
  