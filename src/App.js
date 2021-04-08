import { Switch, Route } from "react-router-dom";

import logo from "./assets/resto_insider_logo.png";
import "./App.css";

import RestaurantList from "./components/RestaurantList";
import Restaurant from "./components/Restaurant";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <nav role="navigation">
        <a href="/" title="Restaurant Insider US Logo">
          <img
            width={"100px"}
            height={"100px"}
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
        <Switch>
          <Route exact path="/" component={RestaurantList} />
          <Route exact path="/restaurant/:id" component={Restaurant} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
