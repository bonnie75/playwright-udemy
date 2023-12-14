import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';
import { isContext } from 'vm';

test.describe('Home', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigate()
    })

    test('Home page has title', async ({ page }) => {

        // verify title
        await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns – Helping you succeed in Software Quality.');
    })

    test('Click get started using CSS Selector', async ({ page }) => {

        // click the button
        await homePage.getStartedBtn.click();

        // verify url has #get-started
        await expect(page).toHaveURL(/.*#get-started/);
    })

    test('Heading Text is visible using text selector', async ({ page }) => {

        // find the text locator
        const headingText = homePage.headingText;

        // verify heading text is visible
        await expect(headingText).toBeVisible();
    })

    test('Search icon is visible', async ({ page }) => {

        // find the search icon locator
        const searchIcon = await homePage.searchIcon;

        // verify search icon is visible
        await expect(searchIcon).toBeVisible();
        
    })
    
    test('Home link is enabled', async ({ page }) => {

        // find the Home text
        const homeText = homePage.homeLink

        // verify home text is enabled
        await expect(homeText).toBeEnabled();
    })

    test('Courses button is available and opens new window', async ( { page }) => {
        
        // click the courses button
        const [newTab] = await Promise.all([page.waitForEvent('popup'), homePage.coursesBtn.click()]);
        
        // verify button is clickable and new page opens
        await newTab.waitForLoadState();
       
        await expect(newTab.getByText('Academy Courses')).toBeVisible();    
    })

})


function async(arg0: { page: any; }): (args: import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions, testInfo: import("@playwright/test").TestInfo) => any {
    throw new Error('Function not implemented.');
}

