// cypress/support/pages/perfumePage.js

class PerfumePage {
  visit() {
    cy.visit('http://localhost:3000/');
    cy.contains('PERFUMES').should('be.visible').click();
    cy.wait(3000);
  }

  getBrandSelector() {
    return cy.get('select.form-control');
  }

  getBrandOptions() {
    return this.getBrandSelector().find('option');
  }

  selectBrandSearchFilter(value) {
    cy.get('#searchBy').select(value);
  }

  getSearchInput() {
    return cy.get('input[placeholder="Search..."]');
  }

  clickSearchButton() {
    return cy.get('button[type="submit"].btn-dark').click();
  }

  filterByBrandCheckbox(brand) {
    cy.get(`i#${brand}`).first().click({ force: true });
  }

  filterByGender(genders = []) {
    genders.forEach((gender) => {
      cy.get(`i#${gender}`).first().click({ force: true });
    });
  }

  filterByPriceRange(value) {
    cy.get(`input[type="radio"][value="${value}"]`).first().click({ force: true });
  }

  getPerfumeCards() {
    return cy.get('.card');
  }

  assertCardsContainText(text) {
    this.getPerfumeCards().each(($el) => {
      cy.wrap($el).should('contain.text', text);
    });
  }

  assertCardsContainAnyText(texts = []) {
    this.getPerfumeCards().each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        const found = texts.some((t) => text.includes(t));
        expect(found).to.be.true;
      });
    });
  }

  assertCardPricesWithin(min, max) {
    this.getPerfumeCards().each(($el) => {
      cy.wrap($el).invoke('text').then((text) => {
        const priceMatch = text.match(/(\d+[.,]?\d*) ?€/);
        if (priceMatch) {
          const price = parseFloat(priceMatch[1].replace(',', '.'));
          expect(price).to.be.within(min, max);
        }
      });
    });
  }
}

export default new PerfumePage();
