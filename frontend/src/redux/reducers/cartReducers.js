import { CART_ADD_ITEM } from '../actionTypes/cartActionTypes';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload; //This contains all our item so we will check if it's already in our cart

      //state.cartItems = already product in our state
      //action.payload = current product
      const existItem = state.cartItems.find(x => x.product === item);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    default:
      return state;
  }
};
