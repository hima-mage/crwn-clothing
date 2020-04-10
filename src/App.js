import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import Sign from "./pages/sign/sign.component";

function App() {
  return (
    <div className="App"> 
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign" component={Sign} />
      </Switch>
    </div>
  );
}

export default App;
