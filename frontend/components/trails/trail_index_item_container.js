import { connect } from 'react-redux';
import TrailIndexItem from './trail_index_item';
import { 
  openPopup, 
  closePopup, 
  switchToReviews 
} from '../../actions/ui_actions';
import { 
  clearTrailPhotos, 
  fetchTrailPhotos 
} from '../../actions/trails_actions';
import { 
  fetchTrailReviews, 
  clearTrailReviews 
} from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  trail: ownProps.trail,
  from: ownProps.from
});

const mDTP = (dispatch) => ({
  openPopup: (trailId) => dispatch(openPopup(trailId)),
  closePopup: () => dispatch(closePopup()),
  clearTrailPhotos: () => dispatch(clearTrailPhotos()),
  fetchTrailPhotos: (trailId) => dispatch(fetchTrailPhotos(trailId)),
  switchToReviews: () => dispatch(switchToReviews()),
  fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId)),
  clearTrailReviews: () => dispatch(clearTrailReviews())
});

export default connect(mSTP, mDTP)(TrailIndexItem);