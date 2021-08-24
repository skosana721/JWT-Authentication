import { GET_ERRORS, CLEAR_ERRORS } from "../actionTypes/user";

const initialState = {
  msg: {},
  status: null,
  id: null,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload,
        status: action.payload,
        id: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};
