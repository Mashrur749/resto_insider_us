/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  FetchRestaurantInfoByState,
  SyncChange,
} from "../actions/restaurantActions";
import { usStateInfo } from "../constants/statesData";

import "./Search.css";

export default function Search() {
  const dispatch = useDispatch();

  const restaurantList = useSelector((state) => state.RestaurantList);

  const [stateCode, setStateCode] = useState(restaurantList.selectedState);
  const [streetAddress, setStreetAddress] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");

  const [searched, setSearched] = useState(false);

  useEffect(() => {
    if (stateCode !== "") {
      dispatch(FetchRestaurantInfoByState(stateCode));
    }
  }, [stateCode]);

  useEffect(() => {
    if (searched === true) {
      dispatch(SyncChange(restaurantName, cuisine, streetAddress, rating));
    }
  }, [streetAddress, cuisine, rating, restaurantName]);

  function handleStateSelection(e) {
    setStateCode(e.target.value);
    setStreetAddress("");
    setCuisine("");
    setRating("");
  }

  function handleStreetAddressChange(e) {
    setStreetAddress(e.target.value);
    setSearched(true);
  }

  function handleCuisineTypeChange(e) {
    setCuisine(e.target.value);
    setSearched(true);
  }

  function handleRatingSelection(e) {
    setRating(e.target.value);
    setSearched(true);
  }

  function handleNameChange(e) {
    console.log("trigger");
    setRestaurantName(e.target.value);
    setSearched(true);
  }
  return (
    <section id="search" className="container">
      {restaurantList.data.length > 0 && (
        <>
          <div className="row">
            <div className="col-25">
              <label htmlFor="restaurantName">Restaurant Name:</label>
            </div>
            <div className="col-75">
              <input
                className="col-75"
                type="text"
                name="Restaurant Name"
                id="restaurantName"
                placeholder="Restaurant name..."
                onChange={handleNameChange}
                value={restaurantName}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="streetAddress">Street Address:</label>
            </div>
            <div className="col-75">
              <input
                className="col-75"
                type="text"
                name="Street Address"
                id="streetAddress"
                placeholder="street address..."
                onChange={handleStreetAddressChange}
                value={streetAddress}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="cuisine">Cuisine: </label>
            </div>
            <div className="col-75">
              <input
                type="text"
                name="cuisine Type"
                id="cuisine"
                placeholder="Cuisine type..."
                onChange={handleCuisineTypeChange}
                value={cuisine}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="rating">Search By Rating:</label>
            </div>
            <div className="col-75">
              <select
                value={rating}
                name="rating"
                id="rating"
                onInput={handleRatingSelection}
              >
                <option value={""}>Rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
          </div>
        </>
      )}

      <div className="row">
        <div className="col-25">
          <label htmlFor="city">Please select a city:</label>
        </div>
        <div className="col-75">
          <select name="city" id="city" onChange={handleStateSelection}>
            <option value={""}> Select a city </option>
            {usStateInfo.map((stateInfo) => (
              <option key={stateInfo.code} value={stateInfo.code}>
                {stateInfo.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
