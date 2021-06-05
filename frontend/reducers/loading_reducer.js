// import {
//   START_LOADING_TRAILS,
//   START_LOADING_PHOTOS,
//   START_LOADING_MAP,
//   CLOSE_MODAL
// } from "../actions/loading_actions";

// const preState = {
//   type: null,
//   data: null
// }

// export default (state = preState, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case OPEN_MODAL:
//       return Object.assign({}, state, {
//         type: action.modal.type,
//         data: action.modal.data
//       })
//     case CLOSE_MODAL:
//       return {
//         type: null,
//         data: null
//       };
//     default:
//       return state;
//   }
// };