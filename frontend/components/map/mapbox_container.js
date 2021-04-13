import { connect } from 'react-redux';
import MapBox from './/mapbox';



const mSTP = (state) => ({
  trails: state.entities.trails
});

const mDTP = (dispatch) => ({
  fetchAllTrails: () => dispatch(fetchAllTrails())
});

export default connect(mSTP, mDTP)(MapBox);