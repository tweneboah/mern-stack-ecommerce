import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions/userAction';
import { Link } from 'react-router-dom';
const Header = () => {
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  const [togle, settogle] = useState(false);
  const [openMobileMenu, setopenMobileMenu] = useState(false);
  return (
    // <header>
    //   <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
    //     <Container>
    //       <LinkContainer to='/'>
    //         <Navbar.Brand>emma.DEV</Navbar.Brand>
    //       </LinkContainer>
    //       <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //       <Navbar.Collapse id='basic-navbar-nav'>
    //         <Nav className='ml-auto'>
    //           <LinkContainer to='/cart'>
    //             <Nav.Link>
    //               <i className='fas fa-shopping-cart'>cart</i>
    //             </Nav.Link>
    //           </LinkContainer>
    //           {userInfo ? (
    //             <NavDropdown title={userInfo.name} id='username'>
    //               <LinkContainer to='/'>
    //                 <NavDropdown.Item onClick={logoutHandler}>
    //                   Logout
    //                 </NavDropdown.Item>
    //               </LinkContainer>
    //               <LinkContainer to='/profile'>
    //                 <NavDropdown.Item>Profile</NavDropdown.Item>
    //               </LinkContainer>

    //               <LinkContainer to='/admin/fetchproducts'>
    //                 <NavDropdown.Item>Products</NavDropdown.Item>
    //               </LinkContainer>
    //               <LinkContainer to='/admin/createproducts'>
    //                 <NavDropdown.Item>Create New Product</NavDropdown.Item>
    //               </LinkContainer>
    //             </NavDropdown>
    //           ) : (
    //             <LinkContainer to='/login'>
    //               <Nav.Link>
    //                 {' '}
    //                 <i className='fas fa-user'>Login</i>
    //               </Nav.Link>
    //             </LinkContainer>
    //           )}
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Container>
    //   </Navbar>
    // </header>

    <>
      <nav class='bg-gray-800'>
        <div class='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
          <div class='relative flex items-center justify-between h-16'>
            <div class='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              {/* <!-- Mobile menu button--> */}
              <button
                onClick={() => setopenMobileMenu(!openMobileMenu)}
                class='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-expanded='false'>
                <span class='sr-only'>Open main menu</span>
                {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  class='block h-6 w-6'
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
                  class='hidden h-6 w-6'
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
            <div class='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
              <div class='flex-shrink-0 flex items-center'>
                {/* Logo */}
                <Link to='/'>
                  <svg
                    className='text-yellow-200   h-8 w-auto'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4'
                    />
                  </svg>
                </Link>
              </div>
              <div class='hidden sm:block sm:ml-6'>
                <div class='flex space-x-4'>
                  <a
                    href='#'
                    class='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Dashboard
                  </a>
                  <a
                    href='#'
                    class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Team
                  </a>
                  <a
                    href='#'
                    class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Projects
                  </a>
                  <a
                    href='#'
                    class='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div class='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button class='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                <span class='sr-only'>View notifications</span>
                {/* <!-- Heroicon name: bell --> */}

                <svg
                  class='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                  />
                </svg>
              </button>

              {/* <!-- Profile dropdown --> */}
              <div class='ml-3 relative'>
                <div>
                  <button
                    class='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    id='user-menu'
                    aria-haspopup='true'>
                    <span class='sr-only'>Open user menu</span>
                    <img
                      onClick={() => settogle(!togle)}
                      class='h-8 w-8 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </button>
                </div>
                {/* <!--
            Profile dropdown panel, show/hide based on dropdown state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
                <div
                  class={`origin-top-right  absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${
                    togle ? 'block transition-all' : 'hidden'
                  } z-10`}
                  role='menu'
                  aria-orientation='vertical'
                  aria-labelledby='user-menu'>
                  <Link
                    to='/profile'
                    onClick={() => settogle(!togle)}
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'>
                    Your Profile
                  </Link>

                  <Link
                    to='/admin/allorders'
                    onClick={() => settogle(!togle)}
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'>
                    All orders
                  </Link>

                  <Link
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    onClick={() => settogle(!togle)}
                    to='/admin/createproducts'>
                    Add Product
                  </Link>
                  <a
                    href='#'
                    class='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    role='menuitem'>
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}
        <div class={`${openMobileMenu ? 'block' : 'hidden'} md:hidden`}>
          <div class='px-2 pt-2 pb-3 space-y-1'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href='#'
              class='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'>
              Dashboard
            </a>
            <a
              href='#'
              class='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Team
            </a>
            <a
              href='#'
              class='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Projects
            </a>
            <a
              href='#'
              class='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
