import {
  MAKE_PAYMENT_REQUEST,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_FAIL,
  FETCH_PAYMENT_REQUEST,
  FETCH_PAYMENT_SUCCESS,
  FETCH_PAYMENT_FAIL,
} from '../actionTypes/paymentActionTypes';

const makePaymentsReducer = (state = {}, action) => {
  switch (action.type) {
    case MAKE_PAYMENT_REQUEST:
      return {
        loading: true,
      };
    case MAKE_PAYMENT_SUCCESS:
      return {
        payment: action.payload,
      };

    case MAKE_PAYMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchAllPaymentsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_PAYMENT_REQUEST:
      return {
        loading: true,
      };
    case FETCH_PAYMENT_SUCCESS:
      return {
        payments: action.payload,
      };

    case FETCH_PAYMENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { makePaymentsReducer, fetchAllPaymentsReducer };
