import { combineReducers } from 'redux';
import windowReducer from './window_reducer';
import mapReducer from './map_reducer';
import trailViewReducer from './trail_ui/trail_view_reducer';
import modal from './modal_reducer';
import loading from './loading_reducer';


const uiReducer = combineReducers({
  window: windowReducer,
  map: mapReducer,
  trailView: trailViewReducer,
  modal,
  loading
})

export default uiReducer;