import { SWITCH_TO_REVIEWS, SWITCH_TO_PHOTOS } from '../../actions/ui_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SWITCH_TO_REVIEWS:
      return "reviews"
    case SWITCH_TO_PHOTOS:
      return "photos"
    default:
      return state;
  }
};