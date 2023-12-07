import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import { faker } from '@faker-js/faker';

test.describe('Contact', () => {
  let contactPage: ContactPage;

  test('Success message appears on Contact form submission', async ({ page }) => {
    contactPage = new ContactPage(page);

    // open contact page
    await contactPage.navigate();

    // fill in contact form
    await contactPage.submitForm(faker.person.fullName(), faker.internet.email(), faker.phone.number(), faker.lorem.sentence() )

    // verify success message
    await expect(contactPage.successTxt).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
    
  })
})