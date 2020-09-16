import React from "react";
import {ReactComponent as ShoppingIcon} from "../../images/shopping-bag.svg";
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cartActions";
import './CartIcon.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>
            {itemCount}
        </span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumulatedQantity, cartItem) => accumulatedQantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)