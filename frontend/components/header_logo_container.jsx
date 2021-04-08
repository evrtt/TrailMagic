import React from 'react';
import { connect } from 'react-redux';
import HeaderLogo from './header_logo';

const mSTP = (state) => ({
  session: state.session
})

export default connect(mSTP, null)(HeaderLogo);