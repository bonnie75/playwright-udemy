import { Page, Locator } from '@playwright/test';

class AboutPage {
  page: Page;
  getTitle: Locator;
  ourstoryTxt: Locator;
  ourmissionTxt: Locator;
  meetteamTxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getTitle = page.locator('#get-started')
    this.ourstoryTxt = page.locator('text=Our Story')
    this.ourmissionTxt = page.locator('text=Our Mission')
    this.meetteamTxt = page.locator('text=Meet our Team')
  }

  async navigate() {
    await this.page.goto('/about');
  }
}

export default AboutPage;
