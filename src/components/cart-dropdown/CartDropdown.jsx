import React from "react";
import {connect} from "react-redux";
import {CustomButton} from "../custom-button/CustomButton";
import {CartItem} from "../cart-item/CartItem";
import {withRouter} from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cartActions";
import './CartDropdown.scss'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(
                cartItem => <CartItem key={cartItem.id} item={cartItem}/>
            )}
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))

