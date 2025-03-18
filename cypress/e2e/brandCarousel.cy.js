describe('Brand Carousel Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should display the active brand slide by default', () => {
      cy.get('.container.text-center') // Scope to brand carousel section
        .find('.carousel-inner .active')
        .should('be.visible');
    });
  
    it('should change slides when clicking carousel indicators', () => {
      cy.get('.container.text-center') // Scope to brand carousel
        .find('.carousel-indicators li')
        .eq(0) // Click the first indicator
        .click();
  
      cy.wait(500); // Wait for animation
  
      cy.get('.container.text-center') // Scoped selection
        .find('.carousel-inner .active')
        .should('contain.html', '<img id="Tom Ford"');
  
      cy.get('.container.text-center')
        .find('.carousel-indicators li')
        .eq(2) // Click the third indicator
        .click();
  
      cy.wait(500);
  
      cy.get('.container.text-center')
        .find('.carousel-inner .active')
        .should('contain.html', '<img id="Bvlgari"'); // Ensure third slide is active
    });
  });
  