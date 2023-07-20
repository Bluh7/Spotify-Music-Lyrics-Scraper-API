const express = require("express")
const router = express.Router()

const TokenController = require("../controllers/TokenController")
const SearchController = require("../controllers/SearchController")
const TrackController = require("../controllers/TrackController")
const LyricsController = require("../controllers/LyricsController")

const tokenMiddleware = require("../middlewares/tokenMiddleware")
const secretMiddleware = require("../middlewares/secretMiddleware")

router.post("/token", secretMiddleware, TokenController.getNewToken)

router.get("/search", tokenMiddleware, SearchController.search)
router.get("/track", tokenMiddleware, TrackController.getTrack)
router.get("/lyrics", tokenMiddleware, LyricsController.getLyrics)

module.exports = router
