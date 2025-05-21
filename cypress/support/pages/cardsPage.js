class CardsPage {
    getCards() {
      return cy.get('.card', { timeout: 10000 });
    }
  
    assertCardsExist() {
      this.getCards().should('exist');
    }
  
    assertCardsContainText(text) {
      this.getCards().each(($el) => {
        cy.wrap($el).should('contain.text', text);
      });
    }
  
    assertCardsMatchEitherText(option1, option2) {
      this.getCards().each(($el) => {
        cy.wrap($el).invoke('text').then((text) => {
          expect(text.includes(option1) || text.includes(option2)).to.be.true;
        });
      });
    }
  
    assertCardPricesInRange(min, max) {
      this.getCards().each(($el) => {
        cy.wrap($el).invoke('text').then((text) => {
          const match = text.match(/(\d+[.,]?\d*) ?€/);
          if (match) {
            const price = parseFloat(match[1].replace(',', '.'));
            expect(price).to.be.within(min, max);
          }
        });
      });
    }
  }
  
  export default new CardsPage();
  