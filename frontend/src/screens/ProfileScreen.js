import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { myOrdersListAction } from '../redux/actions/orderActions';

const ProfileScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  //get the user details
  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  //check if user is login otherwise redirect
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  // useEffect(() => {
  //   dispatch(myOrdersListAction());
  // }, []);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (user && !user.name) {
        // dispatch(getUserDetailsAction('profile')); //Because we want to get the login user
        dispatch(myOrdersListAction());
      } else {
      }
    }
  }, [history, userInfo, dispatch, userDetails.userInfo]);

  //get orders from store

  const myOrdersList = useSelector(state => state.myOrdersList);
  const { loading: loadingOrders, error: errorOrders, orders } = myOrdersList;

  //=========
  //Total spent
  const totalSpent = orders?.reduce((acc, curr) => {
    return acc + curr.totalPrice;
  }, 0);

  return (
    <>
      {loadingOrders ? (
        <h1>loading</h1>
      ) : (
        <section class='py-8 px-4 min-h-screen'>
          <h2 class='text-3xl mb-2  text-center font-heading font-semibold'>
            Orders history
          </h2>

          <div class='flex justify-around flex-wrap -mx-4 mb-8'>
            <div class='w-full lg:w-1/4 px-4 mb-6 lg:mb-0'>
              <div class='h-full'>
                <div class='text-center p-4 mb-2 bg-blue-700 text-white rounded'>
                  <h3 class='text-3xl leading-tight text-yellow-200 font-heading font-semibold'>
                    GHS {totalSpent}
                  </h3>
                  <span class='leading-none'>Amount Spent</span>
                </div>
              </div>
            </div>

            <div class='w-full lg:w-1/4 px-4 mb-6 lg:mb-0'>
              <div class='h-full'>
                <div class='text-center p-4 mb-2 bg-green-500 text-white rounded'>
                  <h3 class='text-3xl leading-tight  font-heading font-semibold'>
                    {orders?.length}
                  </h3>
                  <span class='leading-none'>Total Purchased</span>
                </div>
              </div>
            </div>
            <div class='w-full lg:w-1/4 px-4 mb-6 lg:mb-0'>
              <div class='h-full'>
                <div class='text-center p-4 mb-2 bg-red-400 text-white rounded'>
                  <h3 class='text-3xl leading-tight  font-heading font-semibold'>
                    159
                  </h3>
                  <span class='leading-none'>Peding</span>
                </div>
              </div>
            </div>
          </div>
          <table class='w-full table-auto text-center'>
            <thead>
              <tr>
                <th class='border-t px-2 py-2' scope='col'>
                  Order Id
                </th>

                <th class='border-t px-2 py-2' scope='col'>
                  Date
                </th>
                <th class='text-center border-t px-2 py-2' scope='col'>
                  Amount
                </th>
                <th class='text-center border-t px-2 py-2' scope='col'>
                  Paid
                </th>
                <th class='text-center border-t px-2 py-2' scope='col'>
                  Delivered
                </th>
                <th class='text-left border-t px-2 py-2' scope='col'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.map(order => (
                <tr>
                  <td class='border-t px-2 py-2'>{order._id}</td>
                  <td class='border-t px-2 py-2'>
                    <a href='#'>
                      <img
                        class='inline-block mr-2 rounded-full'
                        src='placeholders-2-0/pictures/male_avatar.svg'
                        alt=''
                        height='40'
                        width='40'
                      />{' '}
                      {order.createdAt.substring(0, 10)}
                    </a>
                  </td>
                  <td class='border-t px-2 py-2'>{order.totalPrice}</td>
                  <td class='text-center border-t px-2 py-2'>
                    {order.isPaid ? (
                      // order.paidAt.substring(0, 10)
                      <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-green-500'>
                        Paid
                      </span>
                    ) : (
                      <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-red-500'>
                        Unpaid
                      </span>
                    )}
                  </td>
                  <td class='text-center border-t px-2 py-2'>
                    {order.isDelivered ? (
                      <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-green-500'>
                        delivered
                      </span>
                    ) : (
                      <span class='inline-block text-sm py-1 px-3 rounded-full text-white bg-red-500'>
                        Not Delivered
                      </span>
                    )}
                  </td>

                  <td class='text-center border-t px-2 py-2'>
                    <Link to={`/order/${order._id}`}>
                      <svg
                        className='h-5 w-5 cursor-pointer'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'>
                        <path d='M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z' />
                        <path
                          fill-rule='evenodd'
                          d='M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z'
                          clip-rule='evenodd'
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}
    </>
  );
};

export default ProfileScreen;
