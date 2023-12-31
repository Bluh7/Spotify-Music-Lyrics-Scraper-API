require("dotenv").config()
const axios = require("axios")
const { getToken } = require("../models/tokenModel")

class SpotifyService {
  constructor() {
    this.clientId = process.env.SPOTIFY_CLIENT_ID
    this.clientSecret = process.env.SPOTIFY_CLIENT_SECRET
    this.tokenUrl = "https://accounts.spotify.com/api/token"
    this.baseUrl = "https://api.spotify.com/v1"
    this.token = getToken()
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
      return response.data
    } catch (err) {
      return err.response.data
    }
  }

  async search(query, type, limit, market = "US") {
    query = encodeURIComponent(query)
    type = encodeURIComponent(type)
    limit = encodeURIComponent(limit)
    market = encodeURIComponent(market)
    const url = `${this.baseUrl}/search?q=${query}&type=${type}&limit=${limit}&market=${market}`
    const headers = { Authorization: `Bearer ${this.token.token}` }

    try {
      const response = await axios.get(url, { headers })
      return response.data
    } catch (err) {
      return err.response.data
    }
  }

  async getTrack(id, market = "US") {
    id = encodeURIComponent(id)
    market = encodeURIComponent(market)
    const url = `${this.baseUrl}/tracks/${id}?market=${market}`
    const headers = { Authorization: `Bearer ${this.token.token}` }

    try {
      const response = await axios.get(url, { headers })
      return response.data
    } catch (err) {
      return err.response.data
    }
  }
}

module.exports = SpotifyService
