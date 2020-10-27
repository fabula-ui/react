module.exports = {
    preset: 'jest-puppeteer',
    testRegex: './*\\.fui\\.js$',
    setupFilesAfterEnv: ['./setupTests.js']
};