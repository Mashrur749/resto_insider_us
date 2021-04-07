import axios from "axios";
import {
  RESTAURANT_LIST_LOADING,
  RESTAURANT_LIST_FAILURE,
  RESTAURANT_LIST_SUCCESS,
  SEARCH,
} from "./../constants/actionTypes";

import env from "react-dotenv";

export const FetchRestaurantInfoByState = function (stateCode, limit) {
  return async function cb(dispatch) {
    dispatch({
      type: RESTAURANT_LIST_LOADING,
    });
    try {
      const res = await axios({
        method: "GET",
        url: `https://us-restaurant-menus.p.rapidapi.com/restaurants/state/${stateCode}?limit=${limit}`,
        headers: {
          "X-RapidAPI-Key": env.DOCUMENU_API_KEY,
          useQueryString: true,
          Pragma: "no-cache",
        },
      });

      res.data.result.data.forEach((element) => {
        element.rating = Math.floor(Math.random() * 6);
      });

      dispatch({
        type: RESTAURANT_LIST_SUCCESS,
        payload: {
          restaurants: res.data.result.data,
          selectedState: stateCode,
        },
      });
    } catch (e) {
      dispatch({
        type: RESTAURANT_LIST_FAILURE,
        payload: {
          error: e,
        },
      });
    }
  };
};

export const SyncChange = (restaurantName, cuisine, streetAddress, rating) => {
  return {
    type: SEARCH,
    payload: {
      restaurantName,
      cuisine,
      streetAddress,
      rating,
    },
  };
};
