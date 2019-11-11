import { MODAL_SHOW, MODAL_RESET } from './actionTypes'

export const modalToggle = (bool = false, data = null, title = '', size = '', img = '') => (dispatch) => {
   dispatch({
      type: MODAL_SHOW,
      payload: { bool, data, title, size, img },
   });
};

export const modalToggleReset = () => (dispatch) => {
   dispatch({ type: MODAL_RESET });
};