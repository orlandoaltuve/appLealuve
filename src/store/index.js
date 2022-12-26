import { createStore, combineReducers, applyMiddleware } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import ProductReducer from "./reducers/products.reducer";
import thunk from "redux-thunk";
import CartReducer from "./reducers/cart.reducer";
import OrderReducer from "./reducers/order.reducer";
import PlacesReducer from "./reducers/places.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    products: ProductReducer,
    cart: CartReducer,
    orders: OrderReducer,
    places: PlacesReducer,

})

export default createStore(RootReducer,applyMiddleware(thunk));
