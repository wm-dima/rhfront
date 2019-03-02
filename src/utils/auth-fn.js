const ACCESS_TOKEN_KEY = 'access_token'
const ACCESS_TOKEN_TYPE = 'access_token_type'
const ACCESS_TOKEN_TYPE_EXTERNAL = 'ext'
const ACCESS_TOKEN_TYPE_INTERNAL = 'int'
const STATE_KEY = 'state'
const TOKEN_VALIDATE_URL = 'validateURL'

export { clearState, getState, setState, clearAccessToken, getAccessToken, getTokenType, setAccessToken,
  ACCESS_TOKEN_TYPE_EXTERNAL, ACCESS_TOKEN_TYPE_INTERNAL, setValidateURL, getValidateURL }

function clearState () {
  localStorage.removeItem(STATE_KEY)
}

function getState () {
  return localStorage.getItem(STATE_KEY)
}

function setState (state) {
  clearState()
  localStorage.setItem(STATE_KEY, state)
}

function clearAccessToken () {
  sessionStorage.removeItem(ACCESS_TOKEN_KEY)
}

function getAccessToken () {
  return sessionStorage.getItem(ACCESS_TOKEN_KEY)
}

function getTokenType () {
  return sessionStorage.getItem(ACCESS_TOKEN_TYPE)
}

function setAccessToken (accessToken, tokenType) {
  clearAccessToken()
  sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
  sessionStorage.setItem(ACCESS_TOKEN_TYPE, tokenType)
}

function setValidateURL (validateURL) {
  sessionStorage.setItem(TOKEN_VALIDATE_URL, validateURL)
}

function getValidateURL () {
  return sessionStorage.getItem(TOKEN_VALIDATE_URL)
}
