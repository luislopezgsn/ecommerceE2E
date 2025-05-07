// cypress/support/pages/homePage.js

class HomePage {
    visit() {
      cy.visit('http://localhost:3000/');
    }
  }
  
  export default new HomePage();
  