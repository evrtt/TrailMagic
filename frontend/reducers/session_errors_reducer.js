import {
  RECEIVE_ERRORS, 
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
        let sessionErrors = Object.values(action.errors.responseJSON);
        return sessionErrors;
    case CLEAR_ERRORS:
      return {}
    case RECEIVE_CURRENT_USER:
      return {}
    default:
      return oldState;
  }
}
