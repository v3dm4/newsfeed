const puppeteer = require('puppeteer')

const isDebugging = () => {
  const debuggingMode = {
    headless: false,
    slowMo: 0,
    devtools: true
  }
  return process.env.NODE_ENV === 'debug' ? debuggingMode : {}
}

describe('Page load', () => {
  it('Test Check', (done) => {
    puppeteer.launch().then(async browser => {
      const page = await browser.newPage()
      await page.goto('http://localhost:3000/news')
      await browser.close()
      done()
    })
  }, 3000)
})