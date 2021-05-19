import { connect } from 'react-redux';
import SearchForm from './search_form';
import { searchTrails } from '../../utils/trails_api_util';
import { withRouter } from 'react-router-dom';

// const mSTP = (state) => ({
// });

const mDTP = (dispatch) => ({
  searchTrails
});

export default withRouter(connect(null, mDTP)(SearchForm));