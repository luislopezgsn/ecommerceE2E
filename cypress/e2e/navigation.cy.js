describe('Navigation and Authentication UI', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should display all navigation links', () => {
      cy.contains('HOME').should('be.visible');
      cy.contains('PERFUMES').should('be.visible');
      cy.contains('CONTACTS').should('be.visible');
    });
  
    it('should display the cart icon with count', () => {
      cy.get('svg').should('have.length.at.least', 1); 
      cy.contains('0').should('be.visible'); 
    });
  
    it('should display sign-in and sign-up buttons', () => {
      cy.contains('SIGN IN').should('be.visible');
      cy.contains('SIGN UP').should('be.visible');
    });
  });
  