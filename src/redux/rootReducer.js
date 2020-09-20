import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {cartReducer} from "./cart/cartReducer";
import {directoryReducer} from "./directory/directotyReducer";

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
})