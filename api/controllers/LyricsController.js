const ScrapingService = require("../services/scrapingService")
const SpotifyService = require("../services/spotifyService")

class LyricsController {
  static async getLyrics(req, res) {
    const { trackid, market } = req.query
    const scraping = new ScrapingService()
    const spotify = new SpotifyService()

    const track = await spotify.getTrack(trackid)

    if (track.error) {
      return res.status(track.error.status).json(track.error)
    }

    try {
      const lyrics = await scraping.getLyrics(trackid, market)
      res.set("Cache-Control", "public, max-age=86400") // 1 day
      return res.status(200).json({ lyrics })
    } catch (err) {
      return res.status(500).json({
        error: {
          message: err.message,
        },
      })
    }
  }
}

module.exports = LyricsController
