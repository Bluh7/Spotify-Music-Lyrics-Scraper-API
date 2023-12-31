const SpotifyService = require("../services/spotifyService")

class SearchController {
  static async search(req, res) {
    const { query, type, limit, market } = req.query
    const spotify = new SpotifyService()
    const result = await spotify.search(query, type, limit, market)

    if (result.error) {
      return res.status(result.error.status).json(result.error)
    }

    return res.status(200).json(result)
  }
}

module.exports = SearchController
