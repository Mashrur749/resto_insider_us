import {
  RESTAURANT_LIST_LOADING,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAILURE,
  SEARCH,
} from "./../constants/actionTypes";

const initialState = {
  loading: false,
  data: [],
  apiData: [],
  errorMsg: "",
  selectedState: "",
  selectedRestaurant: "",
};

const RestaurantListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case RESTAURANT_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case RESTAURANT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: "Unable to get restaurants",
      };

    case RESTAURANT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.restaurants,
        apiData: payload.restaurants,
        selectedState: payload.selectedState,
        errorMsg: "",
      };

    case SEARCH:
      return {
        ...state,
        data: state.apiData.filter(
          (restaurant) =>
            restaurant.cuisines
              .join("")
              .toLowerCase()
              .includes(payload.cuisine.toLowerCase()) &&
            restaurant.address.street
              .toLowerCase()
              .includes(payload.streetAddress.toLowerCase()) &&
            restaurant.rating >= payload.rating
        ),
        errorMsg: "",
      };
    default:
      return state;
  }
};

export default RestaurantListReducer;
