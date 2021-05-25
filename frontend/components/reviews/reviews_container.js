import { connect } from 'react-redux';
import Reviews from './reviews';
import {
  fetchTrailReviews
} from '../../actions/review_actions';

const mSTP = (state, ownProps) => ({
  reviews: state.entities.reviews,
  prefix: ownProps.prefix,
  visible: ownProps.visible,
  trailId: ownProps.trailId,
  loggedIn: !!state.session.id
})

const mDTP = (dispatch) => ({
  fetchTrailReviews: (trailId) => dispatch(fetchTrailReviews(trailId))
})

export default connect(mSTP, mDTP)(Reviews)