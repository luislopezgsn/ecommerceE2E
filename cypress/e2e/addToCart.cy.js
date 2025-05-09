import HomePage from '../support/pages/homePage';
import PerfumesPage from '../support/pages/perfumesPage';
import ProductPage from '../support/pages/productPage';
import CheckoutPage from '../support/pages/checkoutPage';

describe('Add to cart', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    HomePage.visit();
    PerfumesPage.clickPerfumesNav();
  });

  it('should add a perfume to the cart', () => {
    PerfumesPage.clickShowMoreFor('Boss Bottled Night');
    cy.url().should('include', '/product');

    ProductPage.clickAddToCart();
    ProductPage.clickCheckout();

    CheckoutPage.fillForm({
      firstName: 'John',
      lastName: 'Doe',
      city: 'New York',
      address: '123 Main St',
      postIndex: '10001',
      phoneNumber: '1234567890',
      email: 'john.doe@example.com'
    });

    CheckoutPage.validateOrder();
    cy.url().should('include', '/order');
  });
});
