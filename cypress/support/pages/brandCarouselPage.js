// cypress/support/pages/brandCarouselPage.js

class BrandCarouselPage {
    getCarouselContainer() {
      return cy.get('.container.text-center');
    }
  
    getActiveSlide() {
      return this.getCarouselContainer().find('.carousel-inner .active');
    }
  
    getIndicators() {
      return this.getCarouselContainer().find('.carousel-indicators li');
    }
  
    clickIndicator(index) {
      this.getIndicators().eq(index).click();
    }
  
    validateActiveSlideHasImage() {
      this.getActiveSlide()
        .should('be.visible')
        .within(() => {
          cy.get('img').should('have.attr', 'alt').and('not.be.empty');
        });
    }
  }
  
  export default new BrandCarouselPage();
  