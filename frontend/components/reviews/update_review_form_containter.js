import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { updateReview } from '../../actions/review_actions';
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => ({
  formType: 'update',
  id: ownProps.data.id,
  body: ownProps.data.body,
  rating: ownProps.data.rating,
  trailId: ownProps.data.trailId,
  authorId: ownProps.data.authorId,
  trailTitle: ownProps.data.trailTitle,
  id: ownProps.data.id,
  authorName: Object.values(state.entities.users)[0].username
})

const mDTP = (dispatch) => ({
  action: (review, authorName) => dispatch(updateReview(review, authorName)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(ReviewForm)