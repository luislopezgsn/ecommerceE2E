class RecommendedPage {
    visit() {
      cy.visit('http://localhost:3000');
    }
  
    getCard() {
      return cy.get('.card');
    }
  
    getPerfumeName() {
      return cy.get('.card-body h5');
    }
  
    getPerfumeBrand() {
      return cy.get('.card-body h6').first();
    }
  
    getPerfumeImage() {
      return cy.get('.card img');
    }
  
    getPrice() {
      return cy.get('.card-body h6 span');
    }
  
    getRatingSystem() {
      return cy.get('.dv-star-rating');
    }
  
    getStarRatingElements() {
      return cy.get('.dv-star-rating .dv-star-rating-star');
    }
  }
  
  export default new RecommendedPage();
  