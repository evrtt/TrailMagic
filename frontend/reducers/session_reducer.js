import {
  RECEIVE_CURRENT_USER, 
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

export default (oldState = {"id": null}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = Object.assign({}, oldState);
      newState["id"] = action.currentUser.id;
      return newState;
    case LOGOUT_CURRENT_USER:
      return {"id": null};
    default:
      return oldState;
  }
};
