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

        // No need to check for the "SHOW MORE" button as per the update
    });

    it('should display the star rating elements', () => {
        // Check if the star rating elements exist
        cy.get('.dv-star-rating .dv-star-rating-star').should('exist');
    });
});
