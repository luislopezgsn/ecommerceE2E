// cypress/support/pages/perfumePage.js

class PerfumesFiltersPage {
  visit() {
    cy.visit('http://localhost:3000/');
    cy.contains('PERFUMES').should('be.visible').click();
    cy.wait(3000);
  }

  getBrandOptions() {
    return cy.get('.checkbox .cr-icon'); // Targets all brand/gender icons
  }

  selectBrandSearchFilter(filterName) {
    cy.get('#searchBy').select(filterName);
  }

  getSearchInput() {
    return cy.get('input.form-control[placeholder="Search..."]');
  }
  

  clickSearchButton() {
    cy.contains('button', 'Search').click();
  }
  

  filterByBrandCheckbox(brand) {
    cy.get(`input[type="checkbox"]#${brand}`, { timeout: 10000 }).should('exist').click({ force: true });
  }

  filterByGender(genders = []) {
    genders.forEach((gender) => {
      cy.get(`input[type="checkbox"]#${gender}`, { timeout: 10000 }).should('exist').click({ force: true });
    });
  }

  filterByPriceRange(value) {
    cy.get(`input[type="radio"][value="${value}"]`, { timeout: 10000 }).should('exist').click({ force: true });
  }

  getPerfumeCards() {
    return cy.get('.col-lg-3 .card');
  }
  

  assertCardsContainText(text) {
    this.getPerfumeCards().each(($el) => {
      cy.wrap($el).should('contain.text', text);
    });
  }

  assertCardsContainAnyText(texts = []) {
    this.getPerfumeCards().each(($el) => {
      const content = $el.text().toLowerCase();
      const found = texts.some((t) => content.includes(t.toLowerCase()));
      expect(found).to.be.true;
    });
  }

  assertCardPricesWithin(min, max) {
    this.getPerfumeCards().each(($el) => {
      const priceText = $el.find('[data-cy=price]').text().replace(/[^0-9.]/g, '');
      const price = parseFloat(priceText);
      expect(price).to.be.at.least(min).and.at.most(max);
    });
  }
}

export default new PerfumesFiltersPage();
