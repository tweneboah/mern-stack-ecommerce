import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { makePaymentAction } from '../redux/actions/paymentActions';
import pay from '../images/secure.png';
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
      <section className='py-12 px-4'>
        <div className='flex flex-wrap items-center text-center lg:text-left -mx-2'>
          <div className='lg:w-1/2 px-2 lg:pr-10 mt-10 lg:mt-0 '>
            <form onSubmit={submitHandler} className='w-full max-w-sm mx-auto'>
              <h3 className='text-xl text-center mb-6 font-semibold font-heading'>
                Total Amount GHS {totalAmount}
              </h3>
              <div className='mb-4'>
                <div>
                  <label
                    for='price'
                    className='block text-left text-sm font-medium text-gray-700'>
                    Total Amount
                  </label>
                  <div className='mt-1 relative rounded-md shadow-sm'>
                    <input
                      value={totalAmount}
                      disabled
                      type='text'
                      name='price'
                      id='price'
                      className='py-3 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md'
                      placeholder='0.00'
                      aria-describedby='price-currency'
                    />
                    <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                      <span
                        className='text-gray-500 sm:text-sm'
                        id='price-currency'>
                        GHS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mb-4'>
                <div>
                  <label
                    for='email'
                    className=' text-left block text-sm font-medium text-gray-700'>
                    Email
                  </label>
                  <div className=' mt-1 relative rounded-md shadow-sm'>
                    <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                      {/* <!-- Heroicon name: mail --> */}
                      <svg
                        className='h-5 w-5 text-gray-400'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'>
                        <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                        <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                      </svg>
                    </div>
                    <input
                      disabled
                      value={userEmail}
                      type='text'
                      name='email'
                      id='email'
                      className='py-3 bg-gray-200 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
              </div>
              <div className='mb-6'>
                <button className='inline-block w-full py-4 px-8 leading-none text-white bg-yellow-600 hover:bg-red-700 font-semibold rounded shadow'>
                  Pay Now
                </button>
              </div>
              <p className='text-center'>
                <a className='text-indigo-600 hover:underline' href='#'>
                  Cancel Payment
                </a>
              </p>
            </form>
          </div>
          <div className='lg:w-1/2 px-2'>
            <p className='text-3xl underline capitalize'>
              Your payment is secured
            </p>
            <img src={pay} alt='payment' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakePayment;
