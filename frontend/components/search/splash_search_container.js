import { connect } from 'react-redux';
import SplashSearch from './splash_search';
import { searchTrails } from '../../utils/trails_api_util';
import { withRouter } from 'react-router-dom';

// const mSTP = (state) => ({
// });

const mDTP = (dispatch) => ({
  searchTrails
});

export default withRouter(connect(null, mDTP)(SplashSearch));