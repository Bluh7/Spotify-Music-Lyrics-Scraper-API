const SpotifyService = require("../services/spotifyService")

class TrackController {
  static async getTrack(req, res) {
    const { id } = req.query
    const spotify = new SpotifyService()
    const result = await spotify.getTrack(id)

    if (result.error) {
      return res.status(result.error.status).json(result.error)
    }

    return res.status(200).json(result)
  }
}

module.exports = TrackController
