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

    // Click "Checkout"
    cy.contains('button', 'Checkout').click();

    // Fill in the form fields
    cy.get('input[name="firstName"]').type('John');
    cy.get('input[name="lastName"]').type('Doe');
    cy.get('input[name="city"]').type('New York');
    cy.get('input[name="address"]').type('123 Main St');
    cy.get('input[name="postIndex"]').type('10001');
    cy.get('input[name="phoneNumber"]').type('1234567890');
    cy.get('input[name="email"]').type('john.doe@example.com');

    cy.contains('button', 'Validate order').click();

    // Optional: Verify redirection to /order
    cy.url().should('include', '/order');

    });
});