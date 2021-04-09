const WINDOW_RESIZE = 'WINDOW_RESIZE';

const windowResize = (width, height) => {
  type: WINDOW_RESIZE,
  width,
  height
}