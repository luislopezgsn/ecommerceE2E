describe('Contacts Page - Dynamic Content Verification', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/contacts');
    });
  
    it('should verify all expected elements exist and contain some content', () => {
      const elements = [
        { selector: 'h4:contains("Contacts")', type: 'text' },
        { selector: '#email', type: 'attribute', attr: 'href' },
        { selector: 'h4:contains("Working time")', type: 'text' },
        { selector: 'h4:contains("Delivery")', type: 'text' }
      ];
  
      elements.forEach(({ selector, type, attr }) => {
        cy.get(selector).should('exist').and(($el) => {
          if (type === 'text') {
            expect($el.text().trim()).not.to.be.empty;
          } else if (type === 'attribute') {
            expect($el.attr(attr)).not.to.be.empty;
          }
        });
      });
    });
  });
  