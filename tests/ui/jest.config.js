module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.ui\\.js$',
    setupFilesAfterEnv: ['./setupTests.js']
};