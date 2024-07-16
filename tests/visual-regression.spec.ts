import { test, expect } from '@playwright/test';
import { join } from 'node:path';

import { pages } from '../pages';

const baseURL = 'https://hc-dev.highcharts.com';

for (const pageURL of pages) {
    
    test(pageURL, async ({page}) => {
        await page.goto(baseURL + pageURL);

        await page.waitForLoadState('networkidle');

        await expect(page).toHaveScreenshot({ 
            fullPage: true, 
            stylePath:  join(__dirname, '../screenshot.css') 
        });
    });
}
