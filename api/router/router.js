const express = require("express")
const router = express.Router()

const TokenController = require("../controllers/TokenController")
const SearchController = require("../controllers/SearchController")

const tokenMiddleware = require("../middlewares/tokenMiddleware")
const secretMiddleware = require("../middlewares/secretMiddleware")

router.post("/token", secretMiddleware, (req, res) => {
  return TokenController.getNewToken(req, res)
})

router.get("/search", tokenMiddleware, (req, res) => {
  return SearchController.search(req, res)
})

module.exports = router
