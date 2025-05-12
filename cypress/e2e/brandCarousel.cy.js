import HomePage from '../support/pages/homePage';
import BrandCarouselPage from '../support/pages/brandCarouselPage';

describe('Brand Carousel Functionality', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('should display the active brand slide by default', () => {
    BrandCarouselPage.getActiveSlide().should('be.visible');
  });

  it('should change slides dynamically when clicking carousel indicators', () => {
    BrandCarouselPage.getIndicators().then(($indicators) => {
      const totalSlides = $indicators.length;

      cy.wrap($indicators).each((_indicator, index) => {
        BrandCarouselPage.clickIndicator(index);
        BrandCarouselPage.waitForAnimation();
        BrandCarouselPage.validateActiveSlideHasImage();
      });

      expect(totalSlides).to.be.greaterThan(0);
    });
  });
});
