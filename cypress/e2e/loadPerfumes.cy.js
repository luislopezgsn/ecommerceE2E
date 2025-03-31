describe('Menu Page - Brand Selector Filter', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/menu');
    });
  
    it('should filter products by selected brand', () => {
      // Select 'Brand' from the dropdown
      cy.get('#searchBy').select('perfumer');
  
      // Type "Hugo Boss" in the search field
      cy.get('input[placeholder="Search..."]').type('Hugo Boss');
  
      // Verify that all displayed products belong to "Hugo Boss"
      cy.get('.product-card').each(($el) => {
        cy.wrap($el).should('contain.text', 'Hugo Boss');
      });
    });
  });
  