import { connect } from 'react-redux';
import TrailPhotos from './trail_photos'
import { fetchTrailPhotos } from '../../actions/trails_actions'

const mSTP = (state, ownProps) => ({
  photoURLs: state.entities.photoURLs,
  trailId: ownProps.trailId
})

const mDTP = (dispatch) => ({
  fetchTrailPhotos: trailId => dispatch(fetchTrailPhotos(trailId))
})

export default connect(mSTP, mDTP)(TrailPhotos)