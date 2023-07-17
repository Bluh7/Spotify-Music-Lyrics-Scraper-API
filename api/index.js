require("dotenv").config()

const EXPRESS = require("express")
const ROUTER = require("./router/router")

const APP = EXPRESS()
const PORT = process.env.PORT || 3000

APP.use(EXPRESS.json())
APP.use(EXPRESS.urlencoded({ extended: true }))
APP.use(ROUTER)

APP.listen(PORT, err => {
  if (err) throw err
  console.log("Server is running on port 3000")
})
