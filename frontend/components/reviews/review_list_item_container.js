import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { deleteReview } from '../../actions/review_actions';
import ReviewListItem from './review_list_item';


const mSTP = (state, ownProps) => ({
  review: ownProps.review,
  loggedIn: !!state.session.id,
  isAuthor: state.session.id === ownProps.review.authorId,
  trailTitle: ownProps.trailTitle
})

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
  deleteReview: (review, trailId) => dispatch(deleteReview(review, trailId))
})

export default connect(mSTP, mDTP)(ReviewListItem)