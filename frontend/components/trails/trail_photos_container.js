import { connect } from 'react-redux';
import TrailPhotos from './trail_photos'

const mSTP = (state, ownProps) => ({
  photoURLs: state.entities.photoURLs,
  prefix: ownProps.prefix,
  visible: ownProps.visible
})

const mDTP = (dispatch) => ({
})

export default connect(mSTP, null)(TrailPhotos)