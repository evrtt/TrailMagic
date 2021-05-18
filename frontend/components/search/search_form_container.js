import { connect } from 'react-redux';
import SearchForm from './search_form';
import { searchTrails } from '../../utils/trails_api_util';

// const mSTP = (state) => ({
// });

const mDTP = (dispatch) => ({
  searchTrails
});

export default connect(null, mDTP)(SearchForm);