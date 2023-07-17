const EXPRESS = require("express")
const ROUTER = EXPRESS.Router()

ROUTER.get("/", (req, res) => {
  res.send("Hello World")
})

module.exports = ROUTER
