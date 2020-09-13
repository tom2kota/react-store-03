import React from "react";
import imgLogo from '../../images/logo192.png'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionsLink} from './headerStyles';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {CartIcon} from "../cart-icon/CartIcon";

const Header = ({currentUser}) => (
    <HeaderContainer>

        <LogoContainer to='/'>
            <img src={imgLogo} alt='Logo'/>
        </LogoContainer>

        <OptionsContainer>
            <OptionsLink to='/'>
                Home
            </OptionsLink>

            <OptionsLink to='/shop'>
                Shop
            </OptionsLink>

            <OptionsLink to='/contact'>
                Contact
            </OptionsLink>
            {!currentUser ?
                <OptionsLink to='/signin'>
                    Sign In
                </OptionsLink>
                :
                <OptionsLink as='div' onClick={() => auth.signOut()}>
                    Sign Out
                </OptionsLink>
            }
            <CartIcon/>
        </OptionsContainer>

    </HeaderContainer>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header)