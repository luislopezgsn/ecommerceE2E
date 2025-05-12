// cypress/support/pages/carouselPage.js
import CarouselBase from './carouselBase';

class CarouselPage extends CarouselBase {
  constructor() {
    super(); // No container scoping — default carousel
  }
}

export default new CarouselPage();
