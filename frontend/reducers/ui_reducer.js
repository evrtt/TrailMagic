import { combineReducers } from 'redux';
import windowReducer from './window_reducer';
import mapReducer from './map_reducer';


const uiReducer = combineReducers({
  window: windowReducer,
  map: mapReducer
})

export default uiReducer;



// import { WINDOW_RESIZE } from "../actions/ui_actions"

// const preloadedState = {
//   width: typeof window === 'object' ? window.innerWidth : null,
//   height: typeof window === 'object' ? window.innerHeight : null
// }

// export default (state = preloadedState, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case WINDOW_RESIZE:
//       return Object.assign(
//         {}, 
//         state, 
//         {
//           width: action.width, 
//           height: action.height
//         }
//       )
//     default:
//       return state;
//   }
// };