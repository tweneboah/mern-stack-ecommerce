import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPaymentsAction } from '../../redux/actions/paymentActions';
import { fetchAllUsersAction } from '../../redux/actions/userAction';

const AdminAllPayments = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPaymentsAction());
  }, [dispatch]);

  const allPayments = useSelector(state => state.allPayments);
  const { loading, error, payments } = allPayments;

  //Get a user if admin
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && !userInfo.isAdmin) {
      history.push('/profile');
    }
  }, [userInfo]);

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    }
  }, [userInfo]);
  //=====
  //FETCH ALL USERS
  //============
  useEffect(() => {
    dispatch(fetchAllUsersAction());
  }, [dispatch]);

  //========
  //GET ALL USERS
  //==========

  const userList = useSelector(state => state.userList);
  const { loading: usersLoading, users } = userList;

  //Calculate total orders

  const totalIncome = payments?.reduce((acc, curr) => {
    console.log(curr);
    return Number(curr.amountPaid) / 100 + acc;
  }, 0);

  return (
    <>
      <div>
        <dl class='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          <div class='bg-white overflow-hidden shadow rounded-lg'>
            <div class='px-4 py-5 sm:p-6'>
              <div class='flex items-center'>
                <div class='flex-shrink-0 bg-indigo-500 rounded-md p-3'>
                  <svg
                    class='h-6 w-6 text-white'
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
                </div>
                <div class='ml-5 w-0 flex-1'>
                  <dt class='text-sm font-medium text-gray-500 truncate'>
                    Total Customers
                  </dt>
                  <dd class='flex items-baseline'>
                    <div class='text-2xl font-semibold text-gray-900'>
                      {usersLoading ? <h1>Loading</h1> : users?.length}
                    </div>

                    <div class='ml-2 flex items-baseline text-sm font-semibold text-green-600'>
                      <svg
                        class='self-center flex-shrink-0 h-5 w-5 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        aria-hidden='true'>
                        <path
                          fill-rule='evenodd'
                          d='M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z'
                          clip-rule='evenodd'
                        />
                      </svg>
                      <span class='sr-only'>Increased by</span>
                      {/* 122 */}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <div class='bg-white overflow-hidden shadow rounded-lg'>
            <div class='px-4 py-5 sm:p-6'>
              <div class='flex items-center'>
                <div class='flex-shrink-0 bg-indigo-500 rounded-md p-3'>
                  <svg
                    class='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76'
                    />
                  </svg>
                </div>
                <div class='ml-5 w-auto '>
                  <dt class='text-sm font-medium text-gray-500 truncate'>
                    Total Income
                  </dt>
                  <dd class='flex items-baseline'>
                    <div class='text-2xl font-semibold text-gray-900'>
                      GHS {totalIncome}
                    </div>

                    <div class='ml-2 flex items-baseline text-sm font-semibold text-green-600'>
                      <svg
                        class='self-center flex-shrink-0 h-5 w-5 text-green-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        aria-hidden='true'>
                        <path
                          fill-rule='evenodd'
                          d='M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z'
                          clip-rule='evenodd'
                        />
                      </svg>
                      <span class='sr-only'>Increased by</span>
                      5.4%
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <div class='bg-white overflow-hidden shadow rounded-lg'>
            <div class='px-4 py-5 sm:p-6'>
              <div class='flex items-center'>
                <div class='flex-shrink-0 bg-indigo-500 rounded-md p-3'>
                  <svg
                    class='h-6 w-6 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
                    />
                  </svg>
                </div>
                <div class='ml-5 w-0 flex-1'>
                  <dt class='text-sm font-medium text-gray-500 truncate'>
                    Avg. Click Rate
                  </dt>
                  <dd class='flex items-baseline'>
                    <div class='text-2xl font-semibold text-gray-900'>
                      24.57%
                    </div>

                    <div class='ml-2 flex items-baseline text-sm font-semibold text-red-600'>
                      <svg
                        class='self-center flex-shrink-0 h-5 w-5 text-red-500'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        aria-hidden='true'>
                        <path
                          fill-rule='evenodd'
                          d='M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z'
                          clip-rule='evenodd'
                        />
                      </svg>
                      <span class='sr-only'>Decreased by</span>
                      3.2%
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>

      <div className='flex flex-col min-h-screen'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Paid by
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Amount Paid
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Bank
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Paid Order
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Last 4 digit of Account
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {payments?.map(payment => (
                    <tr>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <img
                              className='h-10 w-10 rounded-full'
                              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60'
                              alt=''
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {payment.user}
                            </div>
                            <div className='text-sm text-gray-500'>
                              {payment._id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          {payment.amountPaid / 100}
                        </div>
                      </td>

                      <div className='text-sm text-gray-500'>
                        {payment.bank}
                      </div>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          {payment.order}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {payment.lastFourDigitOfYourAccount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminAllPayments;
