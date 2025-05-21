import ContactsPage from '../support/pages/contactsPage';

describe('Contacts Page - Dynamic Content Verification', () => {
  beforeEach(() => {
    ContactsPage.visit();
  });

  it('should verify all expected elements exist and contain some content', () => {
    ContactsPage.getContactsHeader().should('exist').and('have.text', 'Contacts');

    ContactsPage.getEmailLink().should('exist').and(($el) => {
      expect($el.attr('href')).to.not.be.empty;
    });

    ContactsPage.getWorkingTimeHeader().should('exist').and(($el) => {
      expect($el.text().trim()).not.to.be.empty;
    });

    ContactsPage.getDeliveryHeader().should('exist').and(($el) => {
      expect($el.text().trim()).not.to.be.empty;
    });
  });
});
