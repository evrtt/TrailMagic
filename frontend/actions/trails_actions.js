import * as trailsAPIUtil from '../utils/trails_api_util';

export const RECEIVE_ALL_TRAILS = 'RECEIVE_ALL_TRAILS';
export const RECEIVE_CURRENT_TRAIL = 'RECEIVE_CURRENT_TRAIL';
export const RECEIVE_TRAIL_PHOTOS = 'RECEIVE_TRAIL_PHOTOS';
export const CLEAR_TRAIL_PHOTOS = 'CLEAR_TRAIL_PHOTOS';

const receiveAllTrails = (trails) => ({
  type: RECEIVE_ALL_TRAILS,
  trails
})

const receiveCurrentTrail = (currentTrail) => ({
  type: RECEIVE_CURRENT_TRAIL,
  currentTrail
})

const receiveTrailPhotos = (photoURLs) => ({
  type: RECEIVE_TRAIL_PHOTOS,
  photoURLs
})

export const clearTrailPhotos = () => ({
  type: CLEAR_TRAIL_PHOTOS
})

export const fetchAllTrails = () => dispatch => {
  trailsAPIUtil.fetchTrails()
    .then(trails => dispatch(receiveAllTrails(trails)))
}


export const fetchCurrentTrail = (trailId) => dispatch => {
  trailsAPIUtil.fetchTrail(trailId)
    .then(currentTrail => dispatch(receiveCurrentTrail(currentTrail)))
}

export const fetchTrailPhotos = (trailId) => dispatch => {
  trailsAPIUtil.fetchTrailPhotos(trailId)
    .then(photoURLs => dispatch(receiveTrailPhotos(photoURLs)))
}