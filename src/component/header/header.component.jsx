import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import   CartDropdown   from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss'

const  Header = ({currentUser}) => {
    return (
        <div className="header" >
            <Link className="logo-container" to='/'>
                <Logo className="logo" />
            </Link>
            <div className="options" >
                <Link to="/shop" className="option">SHOP</Link>
                <Link to="/shop" className="option">CONTACT</Link>
                {
                    currentUser ? 
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    : 
                    <Link className="option" to="/sign">Sign In </Link>
                }
                <CartIcon />
            </div>
            <CartDropdown />
        </div>
    )
}

/*
this mapState
take the state in store 
then set the state of the component 
connect
help to pass the state from store 
set state of current component
*/
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default  connect(mapStateToProps)(Header)  