import { test, expect } from '@playwright/test';
import { pages } from '../pages';

import { join } from 'node:path';

const root = 'https://hc-dev.highcharts.com';

for (const pageURL of pages) {
    
    test(pageURL, async ({page}) =>{
        await page.goto(root + pageURL);

        await page.waitForLoadState('networkidle');

        await expect(page).toHaveScreenshot({ 
            fullPage: true, 
            stylePath:  join(__dirname, '../screenshot.css') 
        });
    });
}
