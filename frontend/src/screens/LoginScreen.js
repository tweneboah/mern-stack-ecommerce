import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../redux/actions/userAction';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  console.log(userLogin);
  const redirect = location.search ? location.search.split('=')[1] : '/';

  const submitHandler = e => {
    e.preventDefault();
    dispatch(loginAction(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values =>
          dispatch(loginAction(values.email, values.password))
        }>
        {props => {
          return (
            <div className='min-h-1/2 bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
              <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-xl font-extrabold text-gray-900'>
                  Lgin to your account
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
                        Email address
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.email}
                          onChange={props.handleChange('email')}
                          id='email'
                          name='email'
                          type='email'
                          autocomplete='email'
                          required
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor='password'
                        className='block text-sm font-medium text-gray-700'>
                        Password
                      </label>
                      <div className='mt-1'>
                        <input
                          value={props.values.password}
                          onChange={props.handleChange('password')}
                          id='password'
                          name='password'
                          type='password'
                          autocomplete='current-password'
                          className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='text-sm'>
                        <Link
                          className='font-medium text-indigo-600 hover:text-indigo-500'
                          to={
                            redirect
                              ? `/register?redirect=${redirect}`
                              : '/register'
                          }>
                          Don't have an account?
                        </Link>
                      </div>
                      <div className='text-sm'>
                        <Link
                          className='font-medium text-indigo-600 hover:text-indigo-500'
                          to={`/password-request-send-token`}>
                          Forgot Password?
                        </Link>
                      </div>
                    </div>

                    <div>
                      <button
                        type='submit'
                        className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        Login
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
    </>
  );
};

export default LoginScreen;
