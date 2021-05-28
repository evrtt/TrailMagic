import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  formType: 'update',
  id: ownProps.data.id,
  body: ownProps.data.body,
  rating: ownProps.data.rating,
  trailId: ownProps.data.trailId,
  authorId: ownProps.data.authorId,
  trailTitle: ownProps.data.trailTitle
})

const mDTP = (dispatch) => ({
  action: (review) => dispatch(updateReview(review)),
})

export default connect(mSTP, mDTP)(ReviewForm)