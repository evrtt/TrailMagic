import React from 'react';
import {connect} from 'react-redux';
import FillerContent from './filler_content';

const mSTP = (state) => ({
  ui: state.ui
})

export default connect(mSTP, null)(FillerContent);