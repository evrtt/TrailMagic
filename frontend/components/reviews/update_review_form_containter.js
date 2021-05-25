import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {
  deleteReview,
  updateReview
} from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  formType: 'update',
  review: {
    id: ownProps.review.id,
    body: ownProps.review.body,
    rating: ownProps.review.rating,
    trailId: ownProps.review.trailId,
    authorId: ownProps.review.authorId
  }
})

const mDTP = (dispatch) => ({
  deleteReview: (trailId) => dispatch(deleteReview(trailId)),
  updateReview: (trailId) => dispatch(updateReview(review, trailId)),
  fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
})

export default connect(mSTP, mDTP)(ReviewForm)