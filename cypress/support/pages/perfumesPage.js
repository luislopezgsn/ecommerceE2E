// cypress/support/pages/perfumesPage.js

class PerfumesPage {
    clickPerfumesNav() {
      cy.contains('PERFUMES').should('be.visible').click();
    }
  
    clickShowMoreFor(productName) {
      cy.contains('h6', productName)
        .closest('.card')
        .within(() => {
          cy.contains('span.btn', 'SHOW MORE').click();
        });
    }
  }
  
  export default new PerfumesPage();
  