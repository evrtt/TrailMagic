import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';

const mSTP = (state) => ({
  errors: state.errors,
  formType: 'login'
});

const mDTP = (dispatch) => ({
  formAction: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);