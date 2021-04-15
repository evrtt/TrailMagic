import React from 'react';
import {connect} from 'react-redux';
import FillerContent from './filler_content';

const mSTP = (state) => ({
  window: state.ui.window
})

export default connect(mSTP, null)(FillerContent);