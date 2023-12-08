import { Locator, Page } from '@playwright/test';

class ContactPage {
  private page: Page;
  letstalkTxt: Locator;
  callusLnk: Locator;
  sendmessageTxt: Locator;
  nameInput: Locator;
  emailInput: Locator;
  phoneInput: Locator;
  messageTextArea: Locator;
  submitBtn: Locator;
  successTxt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.letstalkTxt = page.locator('text=talk')
    this.callusLnk = page.locator('//*[@id="primary"]/div/section[2]/div/div/div/div[2]/div/div/a')
    this.sendmessageTxt = page.locator('text=Send Us Message')
    this.nameInput = page.locator('.contact-name input')
    this.emailInput = page.locator('.contact-email input')
    this.phoneInput = page.locator('.contact-phone input')
    this.messageTextArea = page.locator('.contact-message textarea')
    this.submitBtn = page.locator('button[type=submit]')
    this.successTxt = page.locator('div[role="alert"]')
  }  

  async navigate() {
    await this.page.goto('/contact');
  }

  async submitForm(name: string, email: string, phone: string, message: string) {
    await this.nameInput.fill(name)
    await this.emailInput.fill(email)
    await this.phoneInput.fill(phone)
    await this.messageTextArea.fill(message)

    await this.submitBtn.click()
  }
}

export default ContactPage;