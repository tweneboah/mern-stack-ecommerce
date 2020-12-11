import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { makePaymentAction } from '../redux/actions/paymentActions';

const MakePayment = ({ location, history, match }) => {
  const { orderId, totalAmount, userEmail } = location.state;

  const dispatch = useDispatch();
  const paymentDetails = {
    email: userEmail,
    amount: Math.ceil(totalAmount) * 100, //Convert the amount to a whole number
    fullName: 'Emmanuel Tweneboah',
    callback_url: 'http://localhost:3000/profile',
    metadata: { custom_fields: orderId },
  };

  const submitHandler = async e => {
    e.preventDefault();
    dispatch(
      makePaymentAction(
        'https://api.paystack.co/transaction/initialize',
        paymentDetails
      )
    );
  };

  return (
    <div>
      <h1>Pay Now</h1>

      <form onSubmit={submitHandler}>
        <input disabled placeholder='Email' />
        <div>
          <input type='number' placeholder='Amount' />
        </div>
        <button type='submit' className='bg-blue-600 text-white py-2 px-3 '>
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default MakePayment;
