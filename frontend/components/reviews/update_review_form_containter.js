import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  formType: 'update',
  review: {
    id: ownProps.data.review.id,
    body: ownProps.data.review.body,
    rating: ownProps.data.review.rating,
    trailId: ownProps.data.review.trailId,
    authorId: ownProps.data.review.authorId,
    trailTitle: ownProps.data.trailTitle
  }
})

const mDTP = (dispatch) => ({
  action: (review) => dispatch(updateReview(review)),
})

export default connect(mSTP, mDTP)(ReviewForm)