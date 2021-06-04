import * as photosAPIUtil from '../utils/photos_api_util';

export const RECEIVE_TRAIL_PHOTOS = 'RECEIVE_TRAIL_PHOTOS';
export const CLEAR_TRAIL_PHOTOS = 'CLEAR_TRAIL_PHOTOS';
export const INSERT_TRAIL_PHOTO = 'INSERT_TRAIL_PHOTOS';
export const REMOVE_TRAIL_PHOTO = 'REMOVE_TRAIL_PHOTO';

const receiveTrailPhotos = (photoURLs) => ({
  type: RECEIVE_TRAIL_PHOTOS,
  photoURLs
})

const insertTrailPhoto = (photoURLs) => ({
  type: INSERT_TRAIL_PHOTOS,
  photoURLs
})

const removeTrailPhoto = (photoURL) => ({
  type: REMOVE_TRAIL_PHOTO,
  photoURL
})

export const clearTrailPhotos = () => ({
  type: CLEAR_TRAIL_PHOTOS
})

export const fetchTrailPhotos = (trailId) => dispatch => {
  photosAPIUtil.fetchTrailPhotos(trailId)
    .then(
      photoURLs => dispatch(receiveTrailPhotos(photoURLs)),
      err => dispatch(receivePhotosErrors(err))
    )
}

export const uploadTrailPhoto = (formData, trailId) => dispatch => {
  photosAPIUtil.postPhoto(formData, trailId)
    .then(
      photoURL => dispatch(insertTrailPhoto(photoURL)),
      err => dispatch(receivePhotoErrors(err))
    )
}

export const destroyPhoto = (photoId, trailId) => dispatch => {
  photosAPIUtil.destroyPhoto(photoId, trailId)
    .then(
      photoURL => dispatch(removeTrailPhoto(photoURL)),
      err => dispatch(receivePhotosErrors(err))
    )
}