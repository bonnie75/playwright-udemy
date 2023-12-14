import { Page, Locator } from '@playwright/test';

class HomePage {
  page: Page;
  getStartedBtn: Locator;
  headingText: Locator;
  homeLink: Locator;
  searchIcon: Locator;
  navLinks: Locator;
  coursesBtn: Locator;
  courseText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator('#get-started')
    this.headingText = page.locator('text=Think different. Make different.')
    this.homeLink = page.locator('#menu-item-489:has-text("Home")')
    this.searchIcon = page.locator('//*[@id="zak-masthead"]/div/div/div/div[2]/div[1]/div[1]/a')
    this.navLinks = page.locator('#primary-menu li[id*=menu]')
    this.coursesBtn = page.locator('#zak-masthead > div > div > div > div.zak-header-col.zak-header-col--2 > div.zak-header-buttons.zak-header-buttons--desktop > div > a')
    this.courseText = page.locator('#page > div > section > div > div > div > div.elementor-element.elementor-element-5bad201.elementor-widget.elementor-widget-template > div > div > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-678167c.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-fc9cdc7 > div > div.elementor-element.elementor-element-ec3fa7f.elementor-widget.elementor-widget-heading > div > h1')
  }

  async navigate() {
    await this.page.goto('/');
  }

  getNavLinksText() {
    return this.navLinks.allTextContents()
  }
}

export default HomePage;