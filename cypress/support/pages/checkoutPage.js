// cypress/support/pages/checkoutPage.js

class CheckoutPage {
    fillForm({ firstName, lastName, city, address, postIndex, phoneNumber, email }) {
      cy.get('input[name="firstName"]').type(firstName);
      cy.get('input[name="lastName"]').type(lastName);
      cy.get('input[name="city"]').type(city);
      cy.get('input[name="address"]').type(address);
      cy.get('input[name="postIndex"]').type(postIndex);
      cy.get('input[name="phoneNumber"]').type(phoneNumber);
      cy.get('input[name="email"]').type(email);
    }
  
    validateOrder() {
      cy.contains('button', 'Validate order').click();
    }
  }
  
  export default new CheckoutPage();
  