import React from "react";
import {CustomButton} from "../custom-button/CustomButton";
import './CartDropdown.scss'

export const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)