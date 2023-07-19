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
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()

    await page.setCookie(...this.cookies)
    await page.goto(url, { waitUntil: "networkidle2" })

    const lyrics = await page.$$eval(`.${this.lyricsClass}`, elements => {
      return elements.map(element => element.innerText.trim())
    })

    await browser.close()
    return lyrics
  }
}

module.exports = ScrappingService
