class PerfumesFiltersPage {
    visit() {
      cy.visit('http://localhost:3000/');
      cy.contains('PERFUMES').should('be.visible').click();
      cy.wait(3000);
    }
  
    getBrandSelector() {
      return cy.get('select.form-control', { timeout: 10000 });
    }
  
    getBrandOptions() {
      return cy.get('select.form-control option');
    }
  
    selectBrandSearchOption(option = 'perfumer') {
      cy.get('#searchBy', { timeout: 10000 }).select(option);
    }
  
    getSearchInput() {
      return cy.get('input[placeholder="Search..."]', { timeout: 10000 });
    }
  
    clickSearchButton() {
      cy.get('button[type="submit"].btn-dark', { timeout: 10000 }).click();
    }
  
    getCards() {
      return cy.get('.card', { timeout: 10000 });
    }
  
    clickBrandCheckbox(brandId) {
      cy.get(`i#${brandId}`).first().click({ force: true });
    }
  
    clickGenderCheckbox(genderId) {
      cy.get(`i#${genderId}`).first().click({ force: true });
    }
  
    selectPriceRange(value = "3") {
      cy.get(`input[type="radio"][value="${value}"]`).first().click({ force: true });
    }
  }
  
  export default new PerfumesFiltersPage();
  