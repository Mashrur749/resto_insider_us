import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import "./RestaurantList.css";

const ResturantList = (props) => {
  const resturantList = useSelector((state) => state.RestaurantList);

  const showRating = (ratingNum) => {
    let stars = "";
    for (let i = 0; i < ratingNum; i++) {
      stars += "*";
    }
    return stars;
  };

  const ShowData = () => {
    if (resturantList.loading) {
      return <li>Loading...</li>;
    }

    if (!_.isEmpty(resturantList.data)) {
      return resturantList.data.map((el, idx) => (
        <li tabindex={idx} className="flex-item" key={el.restaurant_id}>
          <h2 className="restaurant-name">{el.restaurant_name}</h2>
          <p className="restaurant-rating">
            Rating: {el.rating ? showRating(el.rating) : "n/a"}
          </p>
          <p className="restaurant-address">
            Address: {el.address.formatted ? el.address.formatted : "n/a"}
          </p>
          {el.price_range && (
            <p className="price-range">
              Price Range: {el.price_range ? el.price_range : "n/a"}
            </p>
          )}
          <p>
            Cuisines: {el.cuisines.length > 1 ? el.cuisines.join("/") : "n/a"}
          </p>
        </li>
      ));
    } else if (resturantList.selectedState === "") {
      return <li className="alert">Please select a state from the list</li>;
    } else if (resturantList.errorMsg !== "") {
      return <li className="error">{resturantList.errorMsg}</li>;
    }

    return <li>No restaurants to show</li>;
  };

  return <ul className="container flex">{ShowData()}</ul>;
};

export default ResturantList;
