import { connect } from 'react-redux';
import Trail from './trail';
import { fetchAllTrails, 
  fetchCurrentTrail
} from '../../actions/trails_actions';
import {
  clearTrailPhotos,
  fetchTrailPhotos
} from '../../actions/photo_actions';
import { 
  switchToPhotos, 
  switchToReviews 
} from '../../actions/ui_actions';
import { searchTrails } from '../../utils/trails_api_util';
import { withRouter } from 'react-router-dom';
import { 
  clearTrailReviews, 
  fetchTrailReviews 
} from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  trail: state.entities.trails[ownProps.match.params.trailId],
  currentTrail: ownProps.match.params.trailId,
  trails: state.entities.trails,
  popup: ownProps.popup,
  popupTrailId: ownProps.popupTrailId,
  update: ownProps.update,
  reviewsOrPhotos: state.ui.trailView.reviewsOrPhotos,
  reviewsCount: Object.keys(state.entities.reviews).length,
  photosCount: Object.keys(state.entities.photoURLs).length,
  reviews: state.entities.reviews
});

const mDTP = (dispatch) => ({
  fetchCurrentTrail: (trailId) => dispatch(fetchCurrentTrail(trailId)),
  fetchAllTrails: () => dispatch(fetchAllTrails()),
  fetchTrailPhotos: (trailId) => dispatch(fetchTrailPhotos(trailId)),
  clearTrailPhotos: () => dispatch(clearTrailPhotos()),
  switchToReviews: () => dispatch(switchToReviews()),
  switchToPhotos: () => dispatch(switchToPhotos()),
  searchTrails,
  clearTrailReviews: () => dispatch(clearTrailReviews()),
  fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId))
})

export default withRouter(connect(mSTP, mDTP)(Trail));