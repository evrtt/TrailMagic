import * as photosAPIUtil from '../utils/photos_api_util';

export const RECEIVE_TRAIL_PHOTOS = 'RECEIVE_TRAIL_PHOTOS';
export const CLEAR_TRAIL_PHOTOS = 'CLEAR_TRAIL_PHOTOS';

const receiveTrailPhotos = (photoURLs) => ({
  type: RECEIVE_TRAIL_PHOTOS,
  photoURLs
})

export const clearTrailPhotos = () => ({
  type: CLEAR_TRAIL_PHOTOS
})

export const fetchTrailPhotos = (trailId) => dispatch => {
  photosAPIUtil.fetchTrailPhotos(trailId)
    .then(photoURLs => dispatch(receiveTrailPhotos(photoURLs)))
}