import {combineReducers} from 'redux';
import usersReducer from './session/users_reducer';
import trailsReducer from './trails/trails_reducer';

export default combineReducers({
  users: usersReducer,
  trails: trailsReducer
})