import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { destroyPhoto } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  trailTitle: ownProps.data.trailTitle,
  trailId: ownProps.data.trailId,
  photos: Object.values(ownProps.data.photos),
  currentPhoto: ownProps.data.currentPhoto,
  width: state.ui.window.width,
  height: state.ui.window.height
})

const mDTP = (dispatch) => ({
  destroyPhoto: (photoId, trailId) => dispatch(destroyPhoto(photo, trailId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PhotoShow)