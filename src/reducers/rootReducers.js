import { combineReducers } from "redux";
import RestaurantListReducer from "./RestaurantListReducer";

const RootReducer = combineReducers({
  RestaurantList: RestaurantListReducer,
});

export default RootReducer;
