const fs = require("fs")
const path = require("path")

try {
  const cookies = fs.readFileSync(
    path.resolve(__dirname, "open.spotify.com.cookies.json"),
    "utf8"
  )
  const cookiesJson = JSON.parse(cookies)

  const getCookies = () => {
    return cookiesJson
  }

  module.exports = { getCookies }
} catch (err) {
  throw new Error(`Error while reading cookies file: ${err}`)
}
