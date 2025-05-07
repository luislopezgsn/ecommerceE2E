import HomePage from '../support/pages/homePage';
import NavigationPage from '../support/pages/navigationPage';

describe('Navigation and Authentication UI', () => {
  beforeEach(() => {
    HomePage.visit(); // Delegating page load to HomePage
  });

  it('should display all navigation links', () => {
    NavigationPage.getHomeLink().should('be.visible');
    NavigationPage.getPerfumesLink().should('be.visible');
    NavigationPage.getContactsLink().should('be.visible');
  });

  it('should display sign-in and sign-up buttons', () => {
    NavigationPage.getSignInButton().should('be.visible');
    NavigationPage.getSignUpButton().should('be.visible');
  });
});
