import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import Sign from "./pages/sign/sign.component";
// auth state will live in app to pass into any component needed
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubcribeFromAuth = null;

  componentDidMount() {
    // return method which will be used to close channel
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async user => {
      // this.setState({ currentUser: user });
      createUserProfileDocument(user);
      console.log('ok')
      // console.log(user)
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign" component={Sign} />
        </Switch>
      </div>
    );
  }
}

export default App;
