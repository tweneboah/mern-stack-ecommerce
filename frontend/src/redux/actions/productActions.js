import axios from 'axios';
const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} = require('../actionTypes/productActionTypes');

export const listProductActions = () => {
  return async dispatch => {
    try {
      dispatch({ type: PRODUCT_LIST_REQUEST });
      const { data } = await axios.get('/api/products');

      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      //We have to to grab exactly the error that's coming from our route so we will look at our error response object and pass it as an error to our frontend

      //error.response this is a general error where we can find it but since we have our custom error we will check

      //on the frontend we will have access to our error as error.response.data.message so we will pass this to the frontend
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
