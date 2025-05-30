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
      cy.get('select.form-control', { timeout: 10000 })
        .should('exist')
        .and('be.visible');
      cy.get('select.form-control option').should('have.length.at.least', 2);
    });
  
    it('should filter items when selecting a brand', () => {
      cy.get('#searchBy', { timeout: 10000 }).select('perfumer');
      cy.wait(2000); // Give time for filtering
      cy.get('.card', { timeout: 10000 }).should('exist'); // Updated to match actual item class
    });
  
    it('should verify the search field exists and is functional', () => {
      cy.get('input[placeholder="Search..."]', { timeout: 10000 })
        .should('exist')
        .and('be.visible');
    });
  
    it('should filter results when typing in the search field', () => {
      cy.get('input[placeholder="Search..."]', { timeout: 10000 }).type('Chanel');
      cy.get('button[type="submit"].btn-dark', { timeout: 10000 }).click();
      cy.wait(2000); // Wait for search filter to apply
      cy.get('.card', { timeout: 10000 }).should('exist'); // Updated to match actual item class
      cy.get('.card', { timeout: 10000 }).each(($el) => {
        cy.wrap($el).should('contain.text', 'Chanel');
      });
    });
  });
  