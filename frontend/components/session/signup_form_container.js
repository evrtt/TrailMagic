import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
  errors: state.errors,
  formType: 'signup'
});

const mDTP = (dispatch, ownProps) => ({
  formAction: user => dispatch(signUp(user)),
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);