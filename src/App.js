import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import RestaurantList from "./components/RestaurantList";
import Search from "./components/Search";

import logo from "./assets/resto_insider_logo.png";

// const React = require("react");
// const ReactDOM = require("react-dom");

// if (process.env.NODE_ENV !== "production") {
//   const axe = require("@axe-core/react");
//   axe(React, ReactDOM, 1000);
// }

function App() {
  return (
    <div className="App">
      <nav role="navigation">
        <a href="/">
          <img id="logo" src={logo} alt="Restaurant Insider US Logo" />
        </a>
      </nav>
      <main>
        <h1 className="page-heading">Find Restaurants in US</h1>
        <Search />
        <RestaurantList />
        {/* <Switch>
          <Route path="/" exact component={RestaurantList} />
          <Route path="/restaurant/:id" exact component={Restaurant} />
          <Redirect to="/" />
        </Switch> */}
      </main>
    </div>
  );
}

export default App;
