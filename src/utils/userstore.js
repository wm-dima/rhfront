export const userStore = {
  debug: true,
  state: {
    id: '',
    userDomain: '',
    fullName: '',
    roles: [],
    authType: '',
    loginName: ''
  },
  setUserAction (newValue) {
    if (this.debug) console.log('setUserAction triggered with', newValue)
    this.state.message = newValue
  },
  clearUserAction () {
    if (this.debug) console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
