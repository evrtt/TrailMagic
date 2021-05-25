import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  formType: 'create',
  review: {
    body: null,
    rating: null,
    authorId: null,
    trailId: ownProps.trailId
  }
})

const mDTP = (dispatch) => ({
  action: (review) => dispatch(createReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)