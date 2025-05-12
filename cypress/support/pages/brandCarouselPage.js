// cypress/support/pages/brandCarouselPage.js
import CarouselBase from './carouselBase';

class BrandCarouselPage extends CarouselBase {
  constructor() {
    super('.container.text-center'); // Scoped to brand carousel section
  }
}

export default new BrandCarouselPage();
