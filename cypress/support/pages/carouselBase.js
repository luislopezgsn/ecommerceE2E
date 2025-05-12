export default class CarouselBase {
  constructor(containerSelector = '') {
    this.container = containerSelector;
  }

  getContainer() {
    // Ensure a valid Cypress chainable is always returned
    return this.container ? cy.get(this.container) : cy.get('body');
  }

  getActiveSlide() {
    return this.getContainer().find('.carousel-item.active, .carousel-inner .active');
  }

  getIndicators() {
    return this.getContainer().find('.carousel-indicators li');
  }

  clickIndicator(index) {
    this.getIndicators().eq(index).click();
  }

  clickNextButton() {
    this.getContainer().find('.carousel-control-next').click();
  }

  clickPreviousButton() {
    this.getContainer().find('.carousel-control-prev').click();
  }

  waitForAnimation() {
    cy.wait(500);
  }

  validateActiveSlideHasImage() {
    this.getActiveSlide()
      .should('be.visible')
      .within(() => {
        cy.get('img').should('have.attr', 'alt').and('not.be.empty');
      });
  }
}
