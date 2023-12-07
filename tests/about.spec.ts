import { test, expect } from '@playwright/test';
import AboutPage from '../pages/about.page';

test.describe('About', () => {
    let aboutPage: AboutPage;

    test.beforeEach(async ({ page }) => {
        aboutPage = new AboutPage(page);
        await aboutPage.navigate()
    })

    test('About page has title', async ({ page }) => {

        // verify title
        await expect(page).toHaveTitle('About – Practice E-Commerce Site')
    })
})