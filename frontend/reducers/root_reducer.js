import {combineReducers} from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session/session_reducer';
import ui_reducer from './ui_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: ui_reducer,
})

export default rootReducer;