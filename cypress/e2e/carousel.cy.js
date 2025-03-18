describe('Carousel Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });
  
    it('should display the active slide by default', () => {
      cy.get('.carousel-item.active')
        .should('be.visible');
    });
  
    it('should navigate to the next slide when the next button is clicked', () => {
      cy.get('.carousel-control-next') // Click next button
        .click();
  
      cy.wait(500); // Allow animation time
  
      cy.get('.carousel-item.active') // Check that a new slide is now active
        .should('exist')
        .should('be.visible');
    });
  
    it('should navigate back when the previous button is clicked', () => {
      cy.get('.carousel-control-next').click(); // Move forward
      cy.wait(500);
  
      cy.get('.carousel-control-prev') // Click previous button
        .click();
  
      cy.wait(500);
  
      cy.get('.carousel-item.active') // Check first slide is active again
        .should('exist')
        .should('be.visible');
    });
  });
  