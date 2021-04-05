import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Restaurant from "./components/Restaurant";
import RestaurantList from "./components/RestaurantList";
import Search from "./components/Search";

import logo from "./assets/resto_insider_logo.png";

function App() {
  return (
    <div className="App">
      <nav role="navigation">
        <a href="/" title="Restaurant Insider US Logo">
          <img
            aria-label="Restaurant Insider US Logo"
            id="logo"
            loading="lazy"
            src={logo}
            alt="Restaurant Insider US Logo"
          />
        </a>
      </nav>
      <header>
        <h1 className="page-heading" title="Find Restaurants in US">
          Find Restaurants in US
        </h1>
      </header>
      <div role="main">
        <Search />
        <RestaurantList />
      </div>
    </div>
  );
}

export default App;
