import { connect } from 'react-redux';
import Reviews from './reviews';
import {
  fetchTrailReviews,
  createReview,
  updateReview

} from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  reviews: state.entities.reviews,
  prefix: ownProps.prefix,
  visible: ownProps.visible
})

const mDTP = (dispatch) => ({
  fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId))

})

export default connect(mSTP, mDTP)(Reviews)