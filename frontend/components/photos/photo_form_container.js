import { connect } from 'react-redux';
import PhotoForm from './photo_form';
import { uploadTrailPhoto } from '../../actions/photo_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  trailId: ownProps.data
})

const mDTP = (dispatch) => ({
  action: (photos, trailId) => dispatch(uploadTrailPhoto(photos, trailId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PhotoForm)