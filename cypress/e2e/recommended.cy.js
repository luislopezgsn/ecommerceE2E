import RecommendedPage from '../support/pages/recommendedPage';

describe('Perfume Card Test', () => {
  beforeEach(() => {
    RecommendedPage.visit();
  });

  it('should display the perfume card correctly', () => {
    RecommendedPage.getCard().should('be.visible');
    RecommendedPage.getPerfumeName().should('exist');
    RecommendedPage.getPerfumeBrand().should('exist');
    RecommendedPage.getPerfumeImage().should('have.attr', 'src').and('exist');
    RecommendedPage.getPrice().should('exist');
    RecommendedPage.getRatingSystem().should('be.visible');
  });

  it('should display the star rating elements', () => {
    RecommendedPage.getStarRatingElements().should('exist');
  });
});
