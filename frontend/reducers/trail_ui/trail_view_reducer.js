import { combineReducers } from 'redux';
import reviewsOrPhotosReducer from './reviews_photos_reducer';


const trailViewReducer = combineReducers({
  reviewsOrPhotos: reviewsOrPhotosReducer
})

export default trailViewReducer;