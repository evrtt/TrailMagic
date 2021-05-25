import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';

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
  action: (trailId) => dispatch(updateReview(review, trailId)),
})

export default connect(mSTP, mDTP)(ReviewForm)