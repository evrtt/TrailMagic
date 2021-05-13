import { connect } from 'react-redux';
import MapBox from './/mapbox';
import { openPopup, closePopup } from '../../actions/ui_actions';
import { fetchAllTrails } from '../../actions/trails_actions';




const mSTP = (state) => ({
  trails: state.entities.trails,
  popup: state.ui.map.popup,
  popupTrailId: state.ui.map.popupTrailId
});

const mDTP = (dispatch) => ({
  fetchAllTrails: () => dispatch(fetchAllTrails()),
  openPopup: (trailId) => dispatch(openPopup(trailId)),
  closePopup: () => dispatch(closePopup())
});

export default connect(mSTP, mDTP)(MapBox);