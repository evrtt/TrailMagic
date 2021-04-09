export const WINDOW_RESIZE = 'WINDOW_RESIZE';

export const windowResize = (width, height) => ({
  type: WINDOW_RESIZE,
  width,
  height
});

