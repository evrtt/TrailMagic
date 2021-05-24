import { connect } from 'react-redux';
import ReviewForm from './reviews';
import { 
  createReview,
  fetchReview
 } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  reviewId: ownProps.reviewId,
  formType: 'create'
})

const mDTP = (dispatch) => ({
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
  createReview: (trailId) => dispatch(createReview(review, trailId))
})

export default connect(mSTP, mDTP)(ReviewForm)