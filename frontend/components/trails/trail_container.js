import React from 'react';
import { connect } from 'react-redux';
import Trail from './trail';
import { fetchAllTrails, fetchCurrentTrail } from '../../actions/trails_actions';

const mSTP = (state, ownProps) => ({
  trail: state.entities.trails[ownProps.match.params.trailId],
  currentTrail: ownProps.match.params.trailId,
  trails: state.entities.trails
});

const mDTP = (dispatch) => ({
  fetchCurrentTrail: (trailId) => dispatch(fetchCurrentTrail(trailId)),
  fetchAllTrails: () => dispatch(fetchAllTrails())
})

export default connect(mSTP, mDTP)(Trail);