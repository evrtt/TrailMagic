import { connect } from 'react-redux';
import Splash from './splash';
import { searchTrails } from '../../utils/trails_api_util';
import { withRouter } from 'react-router-dom';

// const mSTP = (state, ownProps)=> ({

// })

const mDTP = (dispatch) => ({
  searchTrails
});


export default withRouter(connect(null, mDTP)(Splash));