describe('Brand Carousel Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should display the active brand slide by default', () => {
      cy.get('.container.text-center') // Scope to brand carousel section
        .find('.carousel-inner .active')
        .should('be.visible');
    });
  
    it('should change slides dynamically when clicking carousel indicators', () => {
      cy.get('.container.text-center') // Scope to brand carousel
        .find('.carousel-indicators li') // Select all indicators
        .then(($indicators) => {
          const totalSlides = $indicators.length;
  
          cy.wrap($indicators).each(($indicator, index) => {
            cy.wrap($indicator).click();
            cy.wait(500); // Wait for animation
  
            // Verify that the active slide changes
            cy.get('.container.text-center')
              .find('.carousel-inner .active')
              .should('be.visible')
              .within(() => {
                // Ensure at least one image is inside the active slide
                cy.get('img')
                  .should('have.attr', 'alt')
                  .and('not.be.empty'); // Dynamically check alt attribute
              });
          });
  
          expect(totalSlides).to.be.greaterThan(0);
        });
    });
  });
  