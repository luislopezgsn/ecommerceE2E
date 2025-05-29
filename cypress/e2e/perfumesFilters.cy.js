// cypress/e2e/perfumesFilters.cy.js

import perfumesFiltersPage from '../support/pages/perfumesFiltersPage';

describe('Perfume Page Tests', () => {
  beforeEach(() => {
    perfumesFiltersPage.visit();
  });

  it('should verify all brand options exist', () => {
    perfumesFiltersPage.getBrandOptions().should('have.length.at.least', 2);
  });

  it('should search for perfumes by brand', () => {
    perfumesFiltersPage.selectBrandSearchFilter('Brand');
    perfumesFiltersPage.getSearchInput().type('Dior');
    perfumesFiltersPage.clickSearchButton();
    perfumesFiltersPage.assertCardsContainText('Dior');
  });

  it('should filter perfumes by brand checkbox', () => {
    perfumesFiltersPage.filterByBrandCheckbox('chanel');
    perfumesFiltersPage.assertCardsContainText('Chanel');
  });

  it('should filter perfumes by gender', () => {
    perfumesFiltersPage.filterByGender(['men', 'women']);
    perfumesFiltersPage.assertCardsContainAnyText(['Homme', 'Femme']);
  });

  it('should filter perfumes by price range', () => {
    perfumesFiltersPage.filterByPriceRange('0-50');
    perfumesFiltersPage.assertCardPricesWithin(0, 50);
  });
});
