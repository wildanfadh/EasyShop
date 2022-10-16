import {
  PRODUCT_REQUEST_SUCCESS,
  PRODUCT_REQUEST_FAILED,
} from "../types/product.types";
import axios from "axios";
import { BASE_URL } from "../../config";

// get all categories
export const getAllProducts = () => {
  return (dispatch) => {
    const config = {
      method: "GET",
      url: `${BASE_URL}/products`,
      // params: {},
      //   data: data,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((res) => {
        // console.log(res.data);

        dispatch({
          type: PRODUCT_REQUEST_SUCCESS,
          payload: {
            data: res.data,
            message: "Success get all products",
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: PRODUCT_REQUEST_FAILED,
          payload: {
            data: null,
            message: "Failed get all products",
          },
        });
      });
  };
};
