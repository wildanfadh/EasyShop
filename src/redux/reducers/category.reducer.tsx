import {
  CLEAR_STATE_CATEGORY,
  CATEGORY_REQUEST_SUCCESS,
  CATEGORY_REQUEST_FAILED,
} from "../types/category.types";

const initialState = {
  data: null,
  status: false,
  message: "",
};

export const getAllCategoriesReducer = (state = initialState, action: any) => {
  //   console.log(action);

  switch (action.type) {
    case CATEGORY_REQUEST_FAILED:
      return {
        ...state,
        status: false,
        message: action.payload.message,
      };
    case CATEGORY_REQUEST_SUCCESS:
      return {
        ...state,
        status: true,
        data: action.payload.data,
        message: action.payload.message,
      };
    case CLEAR_STATE_CATEGORY:
      return initialState;
    default:
      return state;
  }
};
