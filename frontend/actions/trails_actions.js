import * as trailsAPIUtil from '../utils/trails_api_util';

export const RECEIVE_ALL_TRAILS = 'RECEIVE_ALL_TRAILS';
export const RECEIVE_CURRENT_TRAIL = 'RECEIVE_CURRENT_TRAIL';

const receiveAllTrails = (trails) => ({
  type: RECEIVE_ALL_TRAILS,
  trails
})

const receiveCurrentTrail = (currentTrail) => ({
  type: RECEIVE_CURRENT_TRAIL,
  currentTrail
})

export const fetchAllTrails = () => dispatch => {
  trailsAPIUtil.fetchTrails()
    .then(trails => dispatch(receiveAllTrails(trails)))
}

export const fetchCurrentTrail = (trailId) => dispatch => {
  console.log(trailId)
  trailsAPIUtil.fetchTrail(trailId)
    .then(currentTrail => dispatch(receiveCurrentTrail(currentTrail)))
}