const ScrappingService = require("../services/scrappingService")

class LyricsController {
  static async getLyrics(req, res) {
    const { trackId } = req.params
    const scrapping = new ScrappingService()

    try {
      const lyrics = await scrapping.getLyrics(trackId)
      return res.status(200).json({ lyrics })
    } catch (err) {
      return res.status(500).json({
        error: {
          message: "Internal server error",
        },
      })
    }
  }
}

module.exports = LyricsController
