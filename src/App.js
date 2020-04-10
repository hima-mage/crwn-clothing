import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import signInAndUpPage from "./pages/sign-in-and-up/sign-in-&-up.component";

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* out of switch to alaways present and render */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signInAndUpPage} />
      </Switch>
    </div>
  );
}

export default App;
