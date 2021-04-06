import {
  RECEIVE_ERRORS, 
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

export default (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      let errors = action.responseJSON
      return Object.assign({}, errors)
    case RECEIVE_CURRENT_USER:
      return {}
    default:
      return oldState;
  }
}
