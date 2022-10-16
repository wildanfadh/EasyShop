import {
  CLEAR_STATE_PRODUCT,
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILED,
} from "../types/product.types";
const initialState = {
  data: null,
  status: false,
  message: "",
};

export const getAllProductsReducer = (state = initialState, action: any) => {
  //   console.log(action);

  switch (action.type) {
    case PRODUCT_REQUEST_FAILED:
      return {
        ...state,
        status: false,
        message: action.payload.message,
      };
    case PRODUCT_REQUEST_SUCCESS:
      return {
        ...state,
        status: true,
        data: action.payload.data,
        message: action.payload.message,
      };
    case CLEAR_STATE_PRODUCT:
      return initialState;
    default:
      return state;
  }
};
