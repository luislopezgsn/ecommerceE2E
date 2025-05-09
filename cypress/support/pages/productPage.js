// cypress/support/pages/productPage.js

class ProductPage {
    clickAddToCart() {
      cy.contains('button', 'ADD TO CART').click();
    }
  
    clickCheckout() {
      cy.contains('button', 'Checkout').click();
    }
  }
  
  export default new ProductPage();
  