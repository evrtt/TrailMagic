import React from 'react';
import { connect } from 'react-redux';
import TrailIndexItem from './trail_index_item';
import { openPopup, closePopup } from '../../actions/ui_actions';

const mSTP = (state, ownProps) => ({
  trail: ownProps.trail,
  from: ownProps.from
});

const mDTP = (dispatch) => ({
  openPopup: (trailId) => dispatch(openPopup(trailId)),
  closePopup: () => dispatch(closePopup())
});

export default connect(mSTP, mDTP)(TrailIndexItem);