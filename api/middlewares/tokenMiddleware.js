require("dotenv").config()
const axios = require("axios")
const { setToken, getToken } = require("../models/tokenModel")

verifyToken = async (req, res, next) => {
  const token = getToken()

  if (!token || new Date() >= token.expiresIn) {
    try {
      response = await axios.post(
        "http://localhost:3000/token",
        {
          secret: process.env.SECRET,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.data.error) {
        return res.status(response.data.error.status).json(response.data.error)
      }

      setToken(response.data.access_token)

      next()
    } catch (err) {
      throw err
    }
  } else {
    next()
  }
}

module.exports = verifyToken
