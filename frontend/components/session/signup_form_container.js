import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, login, clearErrors } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  errors: state.errors.sessionErrors,
  formType: 'signup'
});

const mDTP = (dispatch, ownProps) => ({
  formAction: user => dispatch(signUp(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);