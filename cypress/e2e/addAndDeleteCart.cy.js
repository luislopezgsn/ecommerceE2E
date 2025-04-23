describe('Add to cart', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });
  
      cy.visit('http://localhost:3000/');
      cy.contains('PERFUMES').should('be.visible').click();
    });

    it('should add a perfume to the cart', () => {
        // Click "SHOW MORE" on "Boss Bottled Night"
cy.contains('h6', 'Boss Bottled Night')
    .closest('.card')
    .within(() => {
        cy.contains('span.btn', 'SHOW MORE').click();
        });

    // Ensure you're on the product page now
    cy.url().should('include', '/product');

    // Click "ADD TO CART"
    cy.contains('button', 'ADD TO CART').click();

    // Click "Remove"
    cy.contains('button', 'Remove').click();

    // Check if the cart is empty
    cy.contains('h2', 'Cart is empty').should('be.visible');

    //Return to home page
    cy.contains('HOME').should('be.visible').click();
})
    
});