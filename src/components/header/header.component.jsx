import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { createStructuredSelector } from 'reselect';

import  CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { selectCartHidden } from '../../redux/cart/cart.selectors.js'
import { selectCurrentUser } from '../../redux/user/user.selectors.js'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({currentUser, hidden}) => (
    <div className='header'>

        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>

        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
            {currentUser ? (
                // <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div> :
                <div className='option' onClick={ () => auth.signOut() }>SIGN OUT</div>) : (
                <Link className='option' to='/signin'>SIGN IN</Link>
                )}
            <CartIcon/>
        </div>
        {
            hidden ? null : <CartDropdown/>
        }
    </div>
);

// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);