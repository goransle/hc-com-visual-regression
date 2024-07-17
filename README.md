## Install
1. Install dependencies: `npm install`
2. Install playwright browsers: `npx playwright install`

## Running tests
`npx playwright test`

If there are errors caused by intended changes, you can update all baseline screenshots by:
1. Run `npx playwright test --update-snapshots`
2. Commit and push the screenshots saved in `./tests`

The above also applies if there's no baselines for your system.

If only some changes are intended, you should either:
* Fix the unintended changes, and run test with `--update-snapshots` on the fixed branch
* Run `--update-snapshots` and only commit the screenshots that contain intended changes

## Ymse
* If you need to work around an element being random in some way, the easiest fix is to set `visibility: hidden` in [screenshot.css](./screenshot.css)
* More pages can be added in [pages.ts](./pages.ts)
* If you wish to run the tests towards a different baseURL, this can be changed in the [.env](./env) file
