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

    test('About page has Our Story', async ({ page }) => {

        // find the element
        const ourstoryText = aboutPage.ourstoryTxt;

        // verify Our Story is present
        await expect(ourstoryText).toBeVisible();
    })

    test('About page has Our Mission', async ({ page}) => {
        // find the element
        const ourmissionText = aboutPage.ourmissionTxt;

        // verify Our Mission is present
        await expect(ourmissionText).toBeVisible();
    })

    test('About page has Meet the Team', async ({ page }) => {
        // find the element
        const meetteamText = aboutPage.meetteamTxt;

        // verify Meet the Team is present
        await expect(meetteamText).toBeVisible();
    })
})