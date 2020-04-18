import React from "react"; 
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'

import {HeaderContainer , LogoContainer , OptionsContainer, OptionLink    } from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer   to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer  >
        <OptionLink to="/shop" className="option">
          SHOP
        </OptionLink>
        <OptionLink to="/shop" className="option">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink  as='div' onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink  to="/sign">
            Sign In 
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

/*
this mapState
take the state in store 
then set the state of the component 
connect
help to pass the state from store 
set state of current component
*/
const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser ,
  hidden:selectCartHidden ,
});

export default connect(mapStateToProps)(Header);
