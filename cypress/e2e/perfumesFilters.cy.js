// cypress/e2e/perfumePage.spec.js

import perfumePage from '../support/pages/perfumesFiltersPage';

describe('Perfume Page Tests', () => {
  beforeEach(() => {
    perfumePage.visit();
  });

  it('should verify all brand options exist', () => {
    perfumePage.getBrandOptions().should('have.length.at.least', 2);
  });

  it('should search for perfumes by brand', () => {
    perfumePage.selectBrandSearchFilter('perfumer');
    perfumePage.getSearchInput().type('Dior');
    perfumePage.clickSearchButton();
    perfumePage.assertCardsContainText('Dior');
  });

  it('should filter perfumes by brand checkbox', () => {
    perfumePage.filterByBrandCheckbox('Burberry');
    perfumePage.assertCardsContainText('Burberry');
  });

  it('should filter perfumes by gender', () => {
    perfumePage.filterByGender(['male', 'female']);
    perfumePage.assertCardsContainAnyText(['Homme', 'Femme']);
  });

  it('should filter perfumes by price range', () => {
    perfumePage.filterByPriceRange('0-50');
    perfumePage.assertCardPricesWithin(0, 50);
  });
});
