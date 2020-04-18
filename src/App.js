import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import Sign from "./pages/sign/sign.component";
import CheckoutPage from "./pages/checkout/checkout.component";
// auth state will live in app to pass into any component needed
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionForPreview } from "./redux/shop/shop.selectors";

class App extends Component {
  unsubcribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;
    // return method which will be used to close channel
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          }); // end of setCurrentUser
        });
      } else {
        setCurrentUser(userAuth);
        addCollectionAndDocuments('collections', collectionArray.map(({title, items}) => ({title , items}) ) )
      }
    });
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <Sign />
            }
          />
        </Switch>
      </div>
    );
  }
}

//  get the user state to controll access to sign page
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionForPreview,
});
// controll user auth state change
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
