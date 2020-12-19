import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/userAction';
import { Link } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';

const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
  };
  const [openProductMenu, setOpenProductMenu] = useState(false);

  const openProductMenuHandler = () => {
    setOpenProductMenu(!openProductMenu);
  };
  const [togle, settogle] = useState(false);
  const [openMobileMenu, setopenMobileMenu] = useState(true);
  return (
    <>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div className='relative flex items-center justify-between h-16'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* <!-- Mobile menu button--> */}
              <button
                onClick={() => setopenMobileMenu(!openMobileMenu)}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-expanded='false'>
                <span className='sr-only'>Open main menu</span>
                {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className='block h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                {/* <!-- Icon when menu is open. -->
          <!-

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className='hidden h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex-shrink-0 flex items-center'>
                {/* Logo */}
                <Link to='/'>
                  <SiShopware className='text-yellow-500 text-5xl' />
                </Link>
              </div>
              <div className='hidden sm:block sm:ml-6'>
                <div className='flex space-x-4'>
                  <Link
                    to='/about'
                    className=' text-white px-3 py-2 rounded-md text-sm font-medium'>
                    About
                  </Link>

                  <Link
                    to='/contact'
                    className=' text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Contact
                  </Link>

                  <Link
                    to='/'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Products
                  </Link>
                  <div class='relative'>
                    {/* <!-- Item active: "text-white", Item inactive: "text-indigo-300" --> */}
                    <div className='flex justify-center items-center'>
                      <Link
                        to='/products'
                        onClick={openProductMenuHandler}
                        type='button'
                        class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                        <span>Category</span>
                        {/* <!--
                  Heroicon name: chevron-down

                  Item active: "text-white", Item inactive: "text-indigo-300"
                --> */}
                      </Link>
                      <svg
                        onClick={openProductMenuHandler}
                        class='cursor-pointer ml-2 h-5 w-5 text-indigo-300 group-hover:text-white'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'>
                        <path
                          fill-rule='evenodd'
                          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                          clip-rule='evenodd'
                        />
                      </svg>
                      <input
                        // onChange={e =>
                        //   dispatch(fetchAllProductsAction(e.target.value))
                        // }
                        type='text'
                        class='py-2 bg-gray-100 px-3 text-center border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/4 sm:text-sm border-gray-500 rounded-md'
                        placeholder='Search for product'
                      />
                    </div>

                    {/* <!--
                'Solutions' flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                  From: "opacity-0 translate-y-1"
                  To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100 translate-y-0"
                  To: "opacity-0 translate-y-1"
              --> */}

                    {/* DROPDOWN 1 */}
                    <div
                      class={`absolute ${
                        openProductMenu ? 'block' : 'hidden'
                      } z-10 -ml-4 mt-3 transform w-screen max-w-md px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
                      <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        {/* Fashion category */}
                        <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div class='relative  bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                            <Link
                              onClick={() =>
                                setOpenProductMenu(!openProductMenu)
                              }
                              to='/fashions'
                              class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                              {/* <!-- Heroicon name: chart-bar --> */}
                              <svg
                                class='flex-shrink-0 h-6 w-6 text-indigo-600'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                />
                              </svg>
                              <div class='ml-4'>
                                <p class='text-base font-medium text-gray-900'>
                                  Fashion
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        {/* Gents category */}
                        <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                            <Link
                              onClick={() =>
                                setOpenProductMenu(!openProductMenu)
                              }
                              to='/d'
                              class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                              {/* <!-- Heroicon name: chart-bar --> */}
                              <svg
                                class='flex-shrink-0 h-6 w-6 text-indigo-600'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                />
                              </svg>
                              <div class='ml-4'>
                                <p class='text-base font-medium text-gray-900'>
                                  Gents
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        {/* Ladies category */}
                        <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                            <Link
                              onClick={() =>
                                setOpenProductMenu(!openProductMenu)
                              }
                              to='/d'
                              class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                              {/* <!-- Heroicon name: chart-bar --> */}
                              <svg
                                class='flex-shrink-0 h-6 w-6 text-indigo-600'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                />
                              </svg>
                              <div class='ml-4'>
                                <p class='text-base font-medium text-gray-900'>
                                  Ladies
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Hot Deals category */}
                        <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                            <Link
                              onClick={() =>
                                setOpenProductMenu(!openProductMenu)
                              }
                              to='/d'
                              class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                              {/* <!-- Heroicon name: chart-bar --> */}
                              <svg
                                class='flex-shrink-0 h-6 w-6 text-indigo-600'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                />
                              </svg>
                              <div class='ml-4'>
                                <p class='text-base font-medium text-gray-900'>
                                  Hot Deals
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Phone Accessories category */}
                        <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                            <Link
                              onClick={() =>
                                setOpenProductMenu(!openProductMenu)
                              }
                              to='/d'
                              class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                              {/* <!-- Heroicon name: chart-bar --> */}
                              <svg
                                class='flex-shrink-0 h-6 w-6 text-indigo-600'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                />
                              </svg>
                              <div class='ml-4'>
                                <p class='text-base font-medium text-gray-900'>
                                  Phone Accessories
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Laptops and Accessories category */}
                        <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                            <Link
                              onClick={() =>
                                setOpenProductMenu(!openProductMenu)
                              }
                              to='/d'
                              class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                              {/* <!-- Heroicon name: chart-bar --> */}
                              <svg
                                class='flex-shrink-0 h-6 w-6 text-indigo-600'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                />
                              </svg>
                              <div class='ml-4'>
                                <p class='text-base font-medium text-gray-900'>
                                  Laptops and Accessories
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>

                        {/* Home Appliances category */}
                        <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                          <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                            <Link
                              onClick={() =>
                                setOpenProductMenu(!openProductMenu)
                              }
                              to='/d'
                              class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                              {/* <!-- Heroicon name: chart-bar --> */}
                              <svg
                                class='flex-shrink-0 h-6 w-6 text-indigo-600'
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aria-hidden='true'>
                                <path
                                  stroke-linecap='round'
                                  stroke-linejoin='round'
                                  stroke-width='2'
                                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                                />
                              </svg>
                              <div class='ml-4'>
                                <p class='text-base font-medium text-gray-900'>
                                  Home Appliances
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* END OF DROPDOWN 1 */}
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              {userInfo ? (
                <button
                  onClick={logoutHandler}
                  className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                  Logout
                </button>
              ) : (
                <>
                  <Link to='/login'>
                    <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      Login
                    </button>
                  </Link>
                  <Link to='/register'>
                    <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                      Register
                    </button>
                  </Link>
                </>
              )}
              {/* <!-- Profile dropdown --> */}
              <div className='ml-3 relative'>
                {userInfo && (
                  <div>
                    {/* Avatar */}

                    <span
                      class='inline-block relative'
                      onClick={() => settogle(!togle)}>
                      <svg
                        class='h-10 w-10 rounded-full  bg-gray-500 text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 24 24'>
                        <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                      </svg>
                      <span class='absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'></span>
                    </span>
                    {/* End Avatar */}
                  </div>
                )}
                {/* =============PROFILE DROPWDOWN======= */}

                {/* Profile dropdown panel, show/hide based on dropdown state. */}

                <div
                  className={`origin-top-right  absolute right-0 mt-2 w-auto rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${
                    togle ? 'block transition-all' : 'hidden'
                  } z-10`}
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'>
                  {/* Admin Links */}
                  {userInfo && userInfo.isAdmin ? (
                    <>
                      <Link
                        onClick={() => settogle(!togle)}
                        to='/admin/allorders'
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
                        <svg
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        <span className='truncate'> All orders</span>
                      </Link>

                      <Link
                        onClick={() => settogle(!togle)}
                        to={`/editprofile/${userInfo._id}`}
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
                        <svg
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        <span className='truncate'> Settings</span>
                      </Link>
                      <Link
                        onClick={() => settogle(!togle)}
                        to='/admin/allpayments'
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
                        <svg
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        <span className='truncate'> View Payments</span>
                      </Link>
                      <Link
                        onClick={() => settogle(!togle)}
                        to='/admin/createproducts'
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
                        <svg
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        <span className='truncate'> Add New Products</span>
                      </Link>
                      <Link
                        onClick={() => settogle(!togle)}
                        to='/admin/fetchproducts'
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
                        <svg
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        <span className='truncate'> All Products</span>
                      </Link>

                      <Link
                        onClick={() => settogle(!togle)}
                        to='/profile'
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
                        <svg
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        <span className='truncate'> Your Profile</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        onClick={() => settogle(!togle)}
                        to='/profile'
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
                        <svg
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        <span className='truncate'> Your Profile</span>
                      </Link>

                      <Link
                        onClick={() => settogle(!togle)}
                        to={`/editprofile/${userInfo?._id}`}
                        className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-3 py-2 text-sm font-medium rounded-md'>
                        <svg
                          className='text-gray-400 group-hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                          />
                        </svg>
                        <span className='truncate'> Settings</span>
                      </Link>
                    </>
                  )}
                </div>
                {/* End of profile dropdown */}
              </div>
            </div>
          </div>
        </div>

        {/*============Mobile menu==================== */}
        {/* <!--
    Mobile menu, toggle classNamees based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}

        <div className={`${openMobileMenu ? 'block' : 'hidden'} md:hidden`}>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href='#'
              className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'>
              Homess
            </a>

            <div class='relative '>
              {/* <!-- Item active: "text-white", Item inactive: "text-indigo-300" --> */}
              <div className='flex justify-items-start items-center'>
                <a
                  onClick={openProductMenuHandler}
                  type='button'
                  className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                  <span>All Products</span>
                </a>
                {/* ================================ */}
                {/* Heroicon name: chevron-down */}

                {/* Item active: "text-white", Item inactive: "text-indigo-300" */}
                {/* ================================= */}
                <svg
                  onClick={openProductMenuHandler}
                  class='cursor-pointer ml-2 h-5 w-5 text-indigo-300 group-hover:text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'>
                  <path
                    fill-rule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  />
                </svg>
                {/* =====END OF HAMBURGER MENU FOR MOBILE===== */}
              </div>

              {/* 'All products' flyout menu, show/hide based on flyout menu state. */}

              {/* DROPDOWN 1 FOR PRODUCTS */}
              <div
                class={`absolute ${
                  openProductMenu ? 'block' : 'hidden'
                } z-10 -ml-4 mt-3 transform w-screen max-w-md px-2 sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2`}>
                {/* Fashion category */}
                <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div class='relative  bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                    <Link
                      onClick={() => setopenMobileMenu(!openMobileMenu)}
                      to='/d'
                      class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                      {/* <!-- Heroicon name: chart-bar --> */}
                      <svg
                        class='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div class='ml-4'>
                        <p class='text-base font-medium text-gray-900'>
                          Fashion
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Gents category */}
                <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                    <Link
                      onClick={() => setopenMobileMenu(!openMobileMenu)}
                      to='/d'
                      class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                      {/* <!-- Heroicon name: chart-bar --> */}
                      <svg
                        class='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div class='ml-4'>
                        <p class='text-base font-medium text-gray-900'>Gents</p>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Ladies category */}
                <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                    <Link
                      onClick={() => setopenMobileMenu(!openMobileMenu)}
                      to='/d'
                      class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                      {/* <!-- Heroicon name: chart-bar --> */}
                      <svg
                        class='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div class='ml-4'>
                        <p class='text-base font-medium text-gray-900'>
                          Ladies
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Hot Deals category */}
                <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                    <Link
                      onClick={() => setopenMobileMenu(!openMobileMenu)}
                      to='/d'
                      class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                      {/* <!-- Heroicon name: chart-bar --> */}
                      <svg
                        class='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div class='ml-4'>
                        <p class='text-base font-medium text-gray-900'>
                          Hot Deals
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Phone Accessories category */}
                <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                    <Link
                      onClick={() => setopenMobileMenu(!openMobileMenu)}
                      to='/d'
                      class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                      {/* <!-- Heroicon name: chart-bar --> */}
                      <svg
                        class='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div class='ml-4'>
                        <p class='text-base font-medium text-gray-900'>
                          Phone Accessories
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Laptops and Accessories category */}
                <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                    <Link
                      onClick={() => setopenMobileMenu(!openMobileMenu)}
                      to='/d'
                      class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                      {/* <!-- Heroicon name: chart-bar --> */}
                      <svg
                        class='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div class='ml-4'>
                        <p class='text-base font-medium text-gray-900'>
                          Laptops and Accessories
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Home Appliances category */}
                <div class='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                  <div class='relative bg-white py-1 px-5 grid gap-6 sm:gap-8 sm:p-8'>
                    <Link
                      onClick={() => setopenMobileMenu(!openMobileMenu)}
                      to='/d'
                      class='-m-3 rounded-lg p-3 flex items-start hover:bg-gray-50'>
                      {/* <!-- Heroicon name: chart-bar --> */}
                      <svg
                        class='flex-shrink-0 h-6 w-6 text-indigo-600'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                        />
                      </svg>
                      <div class='ml-4'>
                        <p class='text-base font-medium text-gray-900'>
                          Home Appliances
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              {/* END OF DROPDOWN 1 FOR MOBILE MENU */}
            </div>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              About
            </a>
            <a
              href='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Contact
            </a>
          </div>
        </div>
        {/* ==============End of mobile Menu=============== */}
      </nav>
    </>
  );
};

export default Header;
