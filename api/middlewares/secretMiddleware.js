require("dotenv").config()

const verifySecret = (req, res, next) => {
  const { secret } = req.body

  if (secret !== process.env.SECRET) {
    return res.status(401).json({
      error: { message: "Unauthorized" },
    })
  }

  next()
}

module.exports = verifySecret
