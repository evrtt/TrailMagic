import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  formType: 'create',
  body: null,
  rating: null,
  authorId: state.session.id,
  trailId: ownProps.data.trailId,
  trailTitle: ownProps.data.trailTitle,
  authorName: Object.values(state.entities.users)[0].username
})

const mDTP = (dispatch) => ({
  action: (review, authorName) => dispatch(createReview(review, authorName)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ReviewForm)