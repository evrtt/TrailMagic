import { connect } from 'react-redux';
import Reviews from './reviews';
import {
  fetchTrailReviews
} from '../../actions/review_actions';
import {
  openModal
} from '../../actions/modal_actions';
const mSTP = (state, ownProps) => {
  
  console.log(state.entities.reviews)
    return (
      {
      reviews: Object.values(state.entities.reviews),
      prefix: ownProps.prefix,
      visible: ownProps.visible,
      trailId: ownProps.trailId,
      trailTitle: ownProps.trailTitle,
      loggedIn: !!state.session.id
      }
    )
  }

const mDTP = (dispatch) => ({
  fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId)),
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Reviews)