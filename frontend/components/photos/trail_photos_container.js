import { connect } from 'react-redux';
import TrailPhotos from './trail_photos';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  photoURLs: state.entities.photoURLs,
  prefix: ownProps.prefix,
  visible: ownProps.visible,
  loggedIn: !!state.session.id,
  trailId: ownProps.trailId,
  trailName: ownProps.trailName
})

const mDTP = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(TrailPhotos)