import * as SessionUtil from './utils/session_api_util'


export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER'

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

export const login = user => dispatch => (
  SessionUtil.login(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receieveErrors(errors))
    )
)

export const logout = () => dispatch => (
  SessionUtil.logout()
    .then(
      () => dispatch(logoutCurrentUser()),
      errors => dispatch(receieveErrors(errors))
    )
)

export const signUp = user => dispatch => (
  SessionUtil.signUp(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      errors => dispatch(receiveErrors(errors))
    )
)

