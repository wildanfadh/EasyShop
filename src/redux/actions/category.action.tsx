import {
  CLEAR_STATE_CATEGORY,
  CATEGORY_REQUEST_SUCCESS,
  CATEGORY_REQUEST_FAILED,
} from "../types/category.types";
import axios from "axios";
import { BASE_URL } from "../../config";

// get all categories
export const getAllCategories = () => {
  return (dispatch) => {
    const config = {
      method: "GET",
      url: `${BASE_URL}/categories`,
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
          type: CATEGORY_REQUEST_SUCCESS,
          payload: {
            data: res.data,
            message: "Success get all categories",
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: CATEGORY_REQUEST_FAILED,
          payload: {
            data: null,
            message: "Failed get all categories",
          },
        });
      });
  };
};
