import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import { saveShippingAddressAction } from '../redux/actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import { Formik } from 'formik';
const ShippingScreen = ({ history }) => {
  const cart = useSelector(state => state.cart);
  const { shippingAddress } = cart;

  //Populate the shipping address into state
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          address: shippingAddress.address,
          city: shippingAddress.city,
          postalCode: shippingAddress.postalCode,
          country: shippingAddress.country,
        }}
        onSubmit={values => {
          console.log(values);
          dispatch(saveShippingAddressAction(values));
          history.push('/payment');
        }}>
        {props => {
          return (
            <div className='min-h-1/2 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
              <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-xl font-extrabold text-gray-900'>
                  Create new Account
                </h2>
                <svg
                  className='mx-auto h-12 w-auto text-blue-500'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
                  />
                </svg>
              </div>

              <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                  <form className='space-y-6' onSubmit={props.handleSubmit}>
                    <div>
                      <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'>
                        Address
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.address}
                          onChange={props.handleChange('address')}
                          placeholder='Enter your Address'
                          type='text'
                          autocomplete='Enter your Address'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        City
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.city}
                          onChange={props.handleChange('city')}
                          type='text'
                          placeholder='Enter your city'
                          autocomplete='text'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        postal Code
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.postalCode}
                          onChange={props.handleChange('postalCode')}
                          type='text'
                          autocomplete='text'
                          required
                          placeholder='Enter your postal code'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label className='block text-sm font-medium text-gray-700'>
                        Country
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.country}
                          onChange={props.handleChange('country')}
                          type='text'
                          autocomplete='text'
                          required
                          placeholder='Enter your Country'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='text-sm'></div>
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Continue
                      </button>
                    </div>
                  </form>

                  <div className='mt-6'>
                    <div className='relative'>
                      <div className='absolute inset-0 flex items-center'>
                        <div className='w-full border-t border-gray-300'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
      ;
    </>
  );
};

export default ShippingScreen;
