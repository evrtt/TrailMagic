import { combineReducers } from 'redux';
import windowReducer from './window_reducer';
import mapReducer from './map_reducer';
import trailViewReducer from './trail_ui/trail_view_reducer';


const uiReducer = combineReducers({
  window: windowReducer,
  map: mapReducer,
  trailView: trailViewReducer
})

export default uiReducer;