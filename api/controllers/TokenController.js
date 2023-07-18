require("dotenv").config()
const SpotifyService = require("../services/spotifyService")

class TokenController {
  static async getNewToken(req, res) {
    const spotify = new SpotifyService()
    const result = await spotify.getAccessToken()

    if (result.error) {
      return res.status(result.error.status).json(result.error)
    }

    return res.status(200).json(result)
  }
}

module.exports = TokenController
