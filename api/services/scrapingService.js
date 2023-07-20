const puppeteer = require("puppeteer")
const { getCookies } = require("../models/cookieModel")

class ScrappingService {
  constructor() {
    this.baseUrl = "https://open.spotify.com/track"
    this.lyricsClass = "xt5C47eHPYNiriMJxGnC"
    this.cookies = getCookies()
  }

  async getLyrics(trackId) {
    const url = `${this.baseUrl}/${trackId}`
    const browser = await puppeteer.launch({ headless: "new" })
    const page = await browser.newPage()

    await page.setCookie(...this.cookies)
    await page.goto(url)
    await page.waitForSelector(`.${this.lyricsClass}`, { timeout: 8000 })

    const lyrics = await page.$$eval(`.${this.lyricsClass}`, lyrics => {
      return lyrics.map(verses => verses.innerText.trim())
    })

    await browser.close()
    return lyrics
  }
}

module.exports = ScrappingService
