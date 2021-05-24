export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_MODAL = 'OPEN_MODAL';

export const closeModal = () => dispatch => ({
  type: CLOSE_MODAL
})

export const openModal = (modal) => dispatch => ({
  type: OPEN_MODAL,
  modal
})
