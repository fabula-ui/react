module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.xui\\.js$',
    setupFilesAfterEnv: ['./setupTests.js']
};