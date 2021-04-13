import React from 'react';
import { connect } from 'react-redux';
import Trail from './trail';
import { fetchCurrentTrail } from '../../actions/trails_actions';

const mSTP = (state, ownProps) => ({
  trail: state.entities.trails[ownProps.match.params.trailId]
});

const mDTP = (dispatch) => ({
  fetchCurrentTrail = (trailId) => dispatch(fetchCurrentTrail(trailId));
})

export default connect(mSTP, mDTP)(Trail);