// cypress/support/pages/navigationPage.js

class NavigationPage {
    getHomeLink() {
      return cy.contains('HOME');
    }
  
    getPerfumesLink() {
      return cy.contains('PERFUMES');
    }
  
    getContactsLink() {
      return cy.contains('CONTACTS');
    }
  
    getSignInButton() {
      return cy.contains('SIGN IN');
    }
  
    getSignUpButton() {
      return cy.contains('SIGN UP');
    }
  }
  
  export default new NavigationPage();
  