import PerfumesFiltersPage from '../support/pages/perfumesFiltersPage';
import CardsPage from '../support/pages/cardsPage';

describe('Menu Page - Brand Selector & Search Filter', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    PerfumesFiltersPage.visit();
  });

  it('should verify the brand selector exists and has options', () => {
    PerfumesFiltersPage.getBrandSelector().should('exist').and('be.visible');
    PerfumesFiltersPage.getBrandOptions().should('have.length.at.least', 2);
  });

  it('should filter items when selecting a brand', () => {
    PerfumesFiltersPage.selectBrandSearchOption();
    CardsPage.assertCardsExist();
  });

  it('should verify the search field exists and is functional', () => {
    PerfumesFiltersPage.getSearchInput().should('exist').and('be.visible');
  });

  it('should filter results when typing in the search field', () => {
    PerfumesFiltersPage.getSearchInput().type('Chanel');
    PerfumesFiltersPage.clickSearchButton();
    CardsPage.assertCardsContainText('Chanel');
  });

  it('should filter cards by brand checkbox', () => {
    PerfumesFiltersPage.clickBrandCheckbox('Dior');
    CardsPage.assertCardsContainText('Dior');
  });

  it('should support multi-brand filtering', () => {
    PerfumesFiltersPage.clickBrandCheckbox('Chanel');
    PerfumesFiltersPage.clickBrandCheckbox('Dior');
    CardsPage.assertCardsMatchEitherText('Chanel', 'Dior');
  });

  it('should allow clicking gender checkboxes', () => {
    PerfumesFiltersPage.clickGenderCheckbox('male');
    PerfumesFiltersPage.clickGenderCheckbox('female');
  });

  it('should filter cards by price radio button', () => {
    PerfumesFiltersPage.selectPriceRange('3');
    CardsPage.assertCardPricesInRange(25, 40);
  });
});
