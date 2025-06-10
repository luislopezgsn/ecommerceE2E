class PerfumesFiltersPage {
  visit() {
    cy.visit('http://localhost:3000/');
    cy.contains('PERFUMES').should('be.visible').click();
    cy.wait(3000);
  }

  getBrandOptions() {
    return cy.get('.checkbox .cr-icon');
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
    cy.contains('label', brand)
      .find('input[type="checkbox"]')
      .should('exist')
      .check({ force: true });
  }

  filterByGender(genders = []) {
    genders.forEach((gender) => {
      cy.contains('label', new RegExp(gender, 'i'))
        .find('input[type="checkbox"]')
        .should('exist')
        .check({ force: true });
    });
  }

  filterByPriceRange(value) {
    cy.contains('label', value)
      .find('input[type="radio"]')
      .should('exist')
      .click({ force: true });
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
      const priceText = $el.text().match(/(\d+[.,]?\d*)\s?€/);
      if (priceText) {
        const price = parseFloat(priceText[1].replace(',', '.'));
        expect(price).to.be.at.least(min).and.at.most(max);
      }
    });
  }
}

export default new PerfumesFiltersPage();
