import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { destroyPhoto } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  photos: ownProps.data.photos
})

const mDTP = (dispatch) => ({
  destroyPhoto: (photoId, trailId) => dispatch(destroyPhoto(photo, trailId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PhotoForm)