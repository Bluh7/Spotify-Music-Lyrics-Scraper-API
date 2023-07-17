const express = require("express")
const TokenController = require("../controllers/TokenController")

const router = express.Router()

router.get("/getToken", (req, res) => {
  return TokenController.getToken(req, res)
})

module.exports = router
