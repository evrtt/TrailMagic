import { OPEN_POP_UP, CLOSE_POP_UP } from "../actions/ui_actions"

const preloadedState = {
  popup: false,
  popupTrailId: null
}

export default (state = preloadedState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_POP_UP:
      return Object.assign( {}, {popup: true, popupTrailId: action.trailId})
    case CLOSE_POP_UP:
      return preloadedState;
    default:
      return state;
  }
};