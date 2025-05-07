// cypress/e2e/homepage.cy.js
import HomePage from '../support/pages/homePage';

describe('Homepage Tests', () => {
  it('should load the homepage successfully', () => {
    HomePage.visit();
  });
});
