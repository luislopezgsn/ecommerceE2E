import HomePage from '../support/pages/homePage';
import CarouselPage from '../support/pages/carouselPage';

describe('Carousel Functionality', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('should display the active slide by default', () => {
    CarouselPage.getActiveSlide()
      .should('exist') // Wait until it's rendered
      .should('be.visible');
  });

  it('should navigate to the next slide when the next button is clicked', () => {
    CarouselPage.clickNextButton();
    CarouselPage.waitForAnimation();
    CarouselPage.getActiveSlide()
      .should('exist')
      .should('be.visible');
  });

  it('should navigate back when the previous button is clicked', () => {
    CarouselPage.clickNextButton();
    CarouselPage.waitForAnimation();

    CarouselPage.clickPreviousButton();
    CarouselPage.waitForAnimation();

    CarouselPage.getActiveSlide()
      .should('exist')
      .should('be.visible');
  });
});
