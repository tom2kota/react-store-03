import React from "react";
import imgLogo from '../../images/logo192.png'
import {HeaderContainer, LogoContainer, OptionsContainer, OptionsLink} from "./headerStyles";
import {auth} from '../../firebase/firebase.utils';

export const Header = ({currentUser}) => (
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
        </OptionsContainer>

    </HeaderContainer>
)