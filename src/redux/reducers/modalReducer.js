import * as actionTypes from "../actions/actionTypes";

const initialState = {
  isOpen: false,
  data: null,
  title:'',
  size:'',
  img:'',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MODAL_SHOW:
      return {
        ...state,
        isOpen: action.payload.bool,
        data: action.payload.data,
        title: action.payload.title,
        size:action.payload.size,
        img:action.payload.img
      };
    case actionTypes.MODAL_RESET:
      return {
        ...state,
        isOpen: false,
        data: null,
        title: '',
        size:'',
        img:''
      };
    default:
      return state;
  }
};