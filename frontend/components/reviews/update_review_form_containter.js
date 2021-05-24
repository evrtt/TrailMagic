import { connect } from 'react-redux';
import ReviewForm from './reviews';
import {
  deleteReview,
  updateReview
} from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  formType: 'update'
})

const mDTP = (dispatch) => ({
  deleteReview: (trailId) => dispatch(deleteReview(trailId)),
  updateReview: (trailId) => dispatch(updateReview(review, trailId))
})

export default connect(mSTP, mDTP)(ReviewForm)