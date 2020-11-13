import axios from 'axios';

import { CART_ADD_ITEM } from '../actionTypes/cartActionTypes';

//The logic
//This will make request to the backend and fetch the data
//We will need the qty and id of the product but lucky to use on our frontend we pass that as a query string

export const addToCart = (id, qty) => {
  //The second argument we pass to dispatch contains all the data in our store

  return async (dispatch, getState) => {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
      //After dispatching this data will be in our store and will take that and store into localstorage
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );

    //Then we will get it from our store by getting it from localstorage and put pass it to the store as an initial state
  };
};
