import axios from 'axios';
import {
  MAKE_PAYMENT_FAIL,
  MAKE_PAYMENT_REQUEST,
  MAKE_PAYMENT_SUCCESS,
} from '../actionTypes/paymentActionTypes';

const makePaymentAction = (paystackUrl, paymentDetails) => {
  //For redirect
  const openInNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  return async dispatch => {
    try {
      dispatch({
        type: MAKE_PAYMENT_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        '/api/pay',
        { paystackUrl: paystackUrl, paymentDetails },
        config
      );
      dispatch({
        type: MAKE_PAYMENT_SUCCESS,
        payload: data,
      }); //Automatic redirect
      openInNewTab(data.data.authorization_url);
    } catch (error) {
      dispatch({
        type: MAKE_PAYMENT_FAIL,
        payload: error,
      });
    }
  };
};

export { makePaymentAction };
