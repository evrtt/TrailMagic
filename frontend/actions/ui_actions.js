export const WINDOW_RESIZE = 'WINDOW_RESIZE';
export const OPEN_POP_UP = 'OPEN_POP_UP';
export const CLOSE_POP_UP = 'CLOSE_POP_UP';
export const SWITCH_TO_REVIEWS = 'SWITCH_TO_REVIEWS'
export const SWITCH_TO_PHOTOS = 'SWITCH_TO_PHOTOS'

export const windowResize = (width, height) => ({
  type: WINDOW_RESIZE,
  width,
  height
});

export const openPopup = (trailId) => ({
  type: OPEN_POP_UP,
  trailId
});

export const closePopup = () => ({
  type: CLOSE_POP_UP
});

export const switchToReviews = () => ({
  type: SWITCH_TO_REVIEWS
})

export const switchToPhotos = () => ({
  type: SWITCH_TO_PHOTOS
})

