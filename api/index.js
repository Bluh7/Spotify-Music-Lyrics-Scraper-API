require("dotenv").config()

const express = require("express")
const router = require("./router/router")

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(PORT, err => {
  if (err) throw err
  console.log("Server is running on port 3000")
})
