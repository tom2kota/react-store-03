import {ADD_ITEM, CLEAR_ITEM_FROM_CART, TOGGLE_CART_HIDDEN} from "./cartTypes";

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: ADD_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: CLEAR_ITEM_FROM_CART,
    payload: item
})