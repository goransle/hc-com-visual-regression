import { test, expect } from '@playwright/test';
import { join } from 'node:path';

import { pages } from '../pages';

for (const pageURL of pages) {
    test(pageURL, async ({page}) => {
        await page.goto(pageURL);

        await page.waitForLoadState('networkidle');

        await expect(page).toHaveScreenshot({ 
            fullPage: true, 
            stylePath:  join(__dirname, '../screenshot.css') 
        });
    });
}

test('Cookie banner', async ({ page }) => {
    await page.goto('/');
    expect (await page.textContent('#hc-cookie-dialog'))
        .toMatchSnapshot('cookie-dialog.txt');
});
