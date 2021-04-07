import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';


const mSTP = (state) => ({
  errors: state.errors.sessionErrors,
  formType: 'login'
});

const mDTP = (dispatch) => ({
  formAction: user => dispatch(login(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())

});

export default connect(mSTP, mDTP)(SessionForm);