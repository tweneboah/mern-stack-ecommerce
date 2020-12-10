import {
  MAKE_PAYMENT_REQUEST,
  MAKE_PAYMENT_SUCCESS,
  MAKE_PAYMENT_FAIL,
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

export { makePaymentsReducer };
