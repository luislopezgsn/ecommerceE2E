class ContactsPage {
    visit() {
      cy.visit('http://localhost:3000/contacts');
    }
  
    getContactsHeader() {
      return cy.contains('h4', 'Contacts');
    }
  
    getEmailLink() {
      return cy.get('#email');
    }
  
    getWorkingTimeHeader() {
      return cy.contains('h4', 'Working time');
    }
  
    getDeliveryHeader() {
      return cy.contains('h4', 'Delivery');
    }
  }
  
  export default new ContactsPage();
  