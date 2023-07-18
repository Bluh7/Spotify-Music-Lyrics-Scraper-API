let token = {
  token: null,
  currentTime: null,
  expiresIn: null,
}

setToken = newToken => {
  tokenTime = new Date()
  expiresIn = new Date(tokenTime.getTime() + 3600 * 1000)
  token = {
    token: newToken,
    tokenTime,
    expiresIn,
  }
}

getToken = () => {
  return token
}

module.exports = {
  setToken,
  getToken,
}
