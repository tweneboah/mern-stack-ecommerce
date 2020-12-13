import axios from 'axios';
import {
  FETCH_PAYMENT_FAIL,
  FETCH_PAYMENT_REQUEST,
  FETCH_PAYMENT_SUCCESS,
  MAKE_PAYMENT_FAIL,
  MAKE_PAYMENT_REQUEST,
  MAKE_PAYMENT_SUCCESS,
} from '../actionTypes/paymentActionTypes';

//======================
//Make payment
//=======================

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

//============================
//=========FETCH ALL PAYMENTS=======
//=============================

const fetchAllPaymentsAction = () => async (dispatch, getState) => {
  //Since this is need authentication we have to grab the user token from store
  try {
    dispatch({
      type: FETCH_PAYMENT_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/pay`, {}, config);

    dispatch({
      type: FETCH_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: FETCH_PAYMENT_FAIL,
      payload: message,
    });
  }
};

export { makePaymentAction, fetchAllPaymentsAction };
