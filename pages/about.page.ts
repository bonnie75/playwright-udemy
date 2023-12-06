import { Page, Locator } from '@playwright/test';

class AboutPage {
  page: Page;
  getTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getTitle = page.locator('#get-started')
  }

  async navigate() {
    await this.page.goto('/about');
  }
}

export default AboutPage;
