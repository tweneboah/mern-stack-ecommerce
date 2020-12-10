// import { CART_ADD_ITEM } from '../actionTypes/cartActionTypes';

// export const cartReducer = (state = { cartItems: [] }, action) => {
//   switch (action.type) {
//     case CART_ADD_ITEM:
//       const item = action.payload; //This contains all our item so we will check if it's already in our cart

//       //state.cartItems = already product in our state
//       //action.payload = current product
//       const existItem = state.cartItems.find(x => x.product === item);

//       if (existItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map(x =>
//             x.product === existItem.product ? item : x
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }

//     default:
//       return state;
//   }
// };

import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_CLEAR_ITEMS,
} from '../actionTypes/cartActionTypes';

//Remember that we pass initialstate from localstorage so we have it here so we will check with the new data coming as a payload if it's already exist

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      //Incoming data
      const item = action.payload;
      //state.cartItems = already existed data

      const existItem = state.cartItems.find(x => x.product === item.product);
      //product is the id that's how we assign it in our action
      if (existItem) {
        //We have to check to check if the product exist we will only keep the new one otherwise no

        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        // If it's new we will add it to the existing one
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload),
      };

    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    default:
      return state;
  }
};
