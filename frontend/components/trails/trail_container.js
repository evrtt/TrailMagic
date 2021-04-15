import React from 'react';
import { connect } from 'react-redux';
import Trail from './trail';
import { fetchAllTrails, fetchCurrentTrail, clearTrailPhotos, fetchTrailPhotos } from '../../actions/trails_actions';
import { switchToPhotos, switchToReviews } from '../../actions/ui_actions';

const mSTP = (state, ownProps) => ({
  trail: state.entities.trails[ownProps.match.params.trailId],
  currentTrail: ownProps.match.params.trailId,
  trails: state.entities.trails,
  popup: ownProps.popup,
  popupTrailId: ownProps.popupTrailId,
  update: ownProps.update,
  reviewsOrPhotos: state.ui.trailView.reviewsOrPhotos
});

const mDTP = (dispatch) => ({
  fetchCurrentTrail: (trailId) => dispatch(fetchCurrentTrail(trailId)),
  fetchAllTrails: () => dispatch(fetchAllTrails()),
  fetchTrailPhotos: (trailId) => dispatch(fetchTrailPhotos(trailId)),
  clearTrailPhotos: () => dispatch(clearTrailPhotos()),
  switchToReviews: () => dispatch(switchToReviews()),
  switchToPhotos: () => dispatch(switchToPhotos())
})

export default connect(mSTP, mDTP)(Trail);