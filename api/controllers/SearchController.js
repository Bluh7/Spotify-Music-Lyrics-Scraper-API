const SpotifyService = require("../services/spotifyService")

class SearchController {
  static async search(req, res) {
    const { query, type, limit, token } = req.query
    const result = await SpotifyService.search(query, type, limit, token)

    if (result.error) {
      return res.status(result.error.status).json(result.error)
    }

    return res.status(200).json(result)
  }
}

module.exports = SearchController
