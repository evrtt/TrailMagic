import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Welcome from './welcome';


const mSTP = ({ entities, session }) => ({
  currentUser: entities.users[session.id]
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Welcome);