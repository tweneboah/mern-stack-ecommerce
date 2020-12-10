import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { makePaymentAction } from '../redux/actions/paymentActions';

const MakePayment = ({ location, history, match }) => {
  const { orderId, totalAmount, userEmail } = location.state;

  // const { data } = await axios.post('/api/pay', {
  //           paystackUrl: 'https://api.paystack.co/transaction/initialize',
  //           paymentDetails: {
  //             email: userEmail,
  //             amount: totalAmount,
  //             fullName: 'Emmanuel Tweneboah',
  //           },
  //         });

  const dispatch = useDispatch();

  console.log(userEmail, totalAmount);
  const submitHandler = async e => {
    e.preventDefault();
    dispatch(
      makePaymentAction('https://api.paystack.co/transaction/initialize', {
        email: 'twene@gmail.com',
        amount: 300, //Convert the amount to a whole number
        fullName: 'Emmanuel Tweneboah',
      })
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
