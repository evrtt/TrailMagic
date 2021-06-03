import * as photosAPIUtil from '../utils/photos_api_util';

export const RECEIVE_TRAIL_PHOTOS = 'RECEIVE_TRAIL_PHOTOS';
export const CLEAR_TRAIL_PHOTOS = 'CLEAR_TRAIL_PHOTOS';
export const INSERT_TRAIL_PHOTOS = 'INSERT_TRAIL_PHOTOS';

const receiveTrailPhotos = (photoURLs) => ({
  type: RECEIVE_TRAIL_PHOTOS,
  photoURLs
})

const insertTrailPhotos = (photoURLs) => ({
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

export const uploadTrailPhotos = (formData, trailId) => dispatch => {
  photosAPIUtil.postPhotos(formData, trailId)
    .then(
      photoURL => dispatch(insertTrailPhotos(photoURL)),
      err => dispatch(receivePhotoErrors(err))
    )
}

export const destroyPhotos = (photoId, trailId) => dispatch => {
  photosAPIUtil.destroyPhotos(photoId, trailId)
    .then(
      photoURL => dispatch(removeTrailPhoto(photoURL)),
      err => dispatch(receivePhotosErrors(err))
    )
}