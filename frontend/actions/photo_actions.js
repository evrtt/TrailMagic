import * as photosAPIUtil from '../utils/photos_api_util';

export const RECEIVE_TRAIL_PHOTOS = 'RECEIVE_TRAIL_PHOTOS';
export const CLEAR_TRAIL_PHOTOS = 'CLEAR_TRAIL_PHOTOS';
export const INSERT_TRAIL_PHOTO = 'INSERT_TRAIL_PHOTOS';
export const REMOVE_TRAIL_PHOTO = 'REMOVE_TRAIL_PHOTO';

const receiveTrailPhotos = (photos) => ({
  type: RECEIVE_TRAIL_PHOTOS,
  photos
})

const insertTrailPhoto = (photo) => ({
  type: INSERT_TRAIL_PHOTO,
  photo
})

const removeTrailPhoto = (photoId) => ({
  type: REMOVE_TRAIL_PHOTO,
  photoId
})

export const clearTrailPhotos = () => ({
  type: CLEAR_TRAIL_PHOTOS
})

export const fetchTrailPhotos = (trailId) => dispatch => {
  photosAPIUtil.fetchTrailPhotos(trailId)
    .then(
      photos => dispatch(receiveTrailPhotos(photos)),
      err => dispatch(receivePhotosErrors(err))
    )
}

export const uploadTrailPhoto = (formData, trailId) => dispatch => {
  photosAPIUtil.postPhoto(formData, trailId)
    .then(
      photo => dispatch(insertTrailPhoto(photo)),
      err => dispatch(receivePhotoErrors(err))
    )
}

export const destroyPhoto = (photoId, trailId) => dispatch => {
  photosAPIUtil.destroyPhoto(photoId, trailId)
    .then(
      photo => dispatch(removeTrailPhoto(photo)),
      err => dispatch(receivePhotosErrors(err))
    )
}