import { connect } from 'react-redux';
import App from './app';
import { startLoadingPage } from '../actions/loading_actions';

const mSTP = (state) => ({
  loading: state.ui.loading
});

const mDTP  = (dispatch) => ({
  startLoadingPage: () => dispatch(startLoadingPage())
})

export default connect(mSTP, null)(App);