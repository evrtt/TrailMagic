import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
  modal: state.ui.modal,
  data: ownProps
})

const mDTP = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(Modal)