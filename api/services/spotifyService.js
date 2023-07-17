require("dotenv").config()
const axios = require("axios")

class SpotifyService {
  constructor() {
    this.clientId = process.env.SPOTIFY_CLIENT_ID
    this.clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    this.tokenUrl = "https://accounts.spotify.com/api/token"
    this.baseUrl = "https://api.spotify.com/v1"
  }

  #buildAuthKey(id, secret) {
    const authKey = new Buffer.from(`${id}:${secret}`).toString("base64")
    return authKey
  }

  async getAccessToken() {
    const authKey = this.#buildAuthKey(this.clientId, this.clientSecret)

    const headers = {
      "Authorization": `Basic ${authKey}`,
      "Content-Type": "application/x-www-form-urlencoded",
    }
    const form = "grant_type=client_credentials"

    try {
      const response = await axios.post(this.tokenUrl, form, { headers })
      return response.data // 1h expiration time
    } catch (err) {
      throw err
    }
  }

  async search(query, type, limit, token) {
    const url = `${SpotifyService.baseUrl}/search?q=${query}&type=${type}&limit=${limit}`
    const headers = { Authorization: `Bearer ${token}` }

    try {
      const response = await axios.get(url, { headers })
      return response.data
    } catch (err) {
      throw err
    }
  }

  async getTrack(id, token) {
    const url = `${SpotifyService.baseUrl}/tracks/${id}`
    const headers = { Authorization: `Bearer ${token}` }

    try {
      const response = await axios.get(url, { headers })
      return response.data
    } catch (err) {
      throw err
    }
  }
}

module.exports = SpotifyService
