import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('Contact', () => {
  let contactPage: ContactPage;

  test.beforeEach(async ({ page }) => {
    contactPage = new ContactPage(page);
    await contactPage.navigate()
  })

  test('Contact page has title', async ({ page }) => {

    // verify title
    await expect(page).toHaveTitle('Contact – Practice E-Commerce Site');

  })

  test('Contact page has Let`s Talk section', async ({ page }) => {
    // find the text locator
    const letstalkTxt = contactPage.letstalkTxt;

    // verify heading text is visible
    await expect(letstalkTxt).toBeVisible();
  })

  test('Call us now button is visible and clickable', async({ page }) => {
    // click the button
    await contactPage.callusLnk.click();

    // verify url has #
    await expect(page).toHaveURL(/.*#/);
  })

  test('Send us a message section is visible', async({ page }) => {
    // find the text locator
    const sendmessageTxt = contactPage.sendmessageTxt;

    // verify text is visible
    await expect(sendmessageTxt).toBeVisible();
  })

  test('Success message appears on Contact form submission', async ({ page }) => {

    // fill in contact form
    await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.sentence() )

    // verify success message
    await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    
  })
})