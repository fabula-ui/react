// describe('Button', () => {
//     beforeAll(async () => {
//         jest.setTimeout(50000);
//     });

//     beforeEach(async () => {
//         await page.goto('http://localhost:9009/iframe.html?id=button--color');

//         page.setViewport({ width: 1920, height: 1080 });
//     });

//     it('visually looks correct', async () => {
//         const image = await page.screenshot();

//         // API from jest-image-snapshot
//         expect(image).toMatchImageSnapshot();
//     });

//     it('should hover correctly', async () => {
//         const buttons = await page.$$('.fab-button-wrapper');

//         for (let i = 0; i < buttons.length; i++) {
//             const button = buttons[i];
//             let screenshot;

//             await button.hover();
//             screenshot = await button.screenshot();

//             expect(screenshot).toMatchImageSnapshot();
//         }
//     });

//     it('should click correctly', async () => {
//         const buttons = await page.$$('.fab-button');
//         let screenshot;

//         await page.waitForSelector('.fab-button-wrapper[data-color="primary"]');
        
//         page.click('.fab-button-wrapper[data-color="primary"]', { delay: 500 }).then(() => {}).catch(e => {});

//         await page.waitFor(100);

//         screenshot = await page.screenshot();

//         expect(screenshot).toMatchImageSnapshot();
//     });
// });