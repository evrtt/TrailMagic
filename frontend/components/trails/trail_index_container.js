import React from 'react';
import { connect } from 'react-redux';
import TrailIndex from './trail_index';
import { fetchAllTrails } from '../../actions/trails_actions';

const mSTP = (state, ownProps) => ({
  trails: Object.values(state.entities.trails),
  from: ownProps.from,
  currentTrailId: ownProps.currentTrailId
});

const mDTP = (dispatch) => ({
  fetchAllTrails: () => dispatch(fetchAllTrails())
});

export default connect(mSTP, mDTP)(TrailIndex);