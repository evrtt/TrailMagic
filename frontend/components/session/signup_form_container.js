import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp} from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup'
});

const mDTP = (dispatch, ownProps) => ({
  formAction: user => dispatch(signUp(user))
});

export default connect(mSTP, mDTP)(SessionForm);