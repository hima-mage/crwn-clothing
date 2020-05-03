import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";
import Sign from "./pages/sign/sign.component";
import CheckoutPage from "./pages/checkout/checkout.component"; 
 
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions"; 
import { GlobalStyle } from "./global.styles";


const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div className="App">
        <GlobalStyle />
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
};

//  get the user state to controll access to sign page
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
// controll user auth state change
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
