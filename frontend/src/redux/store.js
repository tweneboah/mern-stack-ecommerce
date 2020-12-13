import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productCreateReducer,
  productDetailsReducer,
  productListReducer,
} from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from './reducers/userReducers';
import {
  fetchAllPaymentsReducer,
  makePaymentsReducer,
} from './reducers/paymentsReducer';
import {
  fetchAllOrdersReducer,
  myOrdersListReducer,
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from './reducers/orderReducer';
import { productFileUploadReducer } from './reducers/productFileUploadReducer';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productCreate: productCreateReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrdersList: myOrdersListReducer,
  allOrders: fetchAllOrdersReducer,
  userList: userListReducer,
  makePayment: makePaymentsReducer,
  productImageUploaded: productFileUploadReducer,
  allPayments: fetchAllPaymentsReducer,
});

//Put cart in storage as an initial state
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
//put user from localstorage to store
const userLoginFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

//Grab the shipping address from storage we will add to cart state
const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

//initial state
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userLoginFromStorage },
};

//Middleware
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
