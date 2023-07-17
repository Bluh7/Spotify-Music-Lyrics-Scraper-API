let token = {
  token: null,
  currentTime: null,
  expiresIn: null,
}

setToken = newToken => {
  token = {
    token: newToken,
    tokenTime: new Date(),
    expiresIn: new Date(tokenTime.getTime() + 3600 * 1000),
  }
}

getToken = () => {
  return token
}

module.exports = {
  setToken,
  getToken,
}
