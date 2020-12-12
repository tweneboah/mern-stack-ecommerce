import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllOrdersAction } from '../../redux/actions/orderActions';
import { getUserDetailsAction } from '../../redux/actions/userAction';

const AdminAllOrdersScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);

  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/profile');
    } else {
      dispatch(getUserDetailsAction('profile'));
      if (userInfo && !userInfo.isAdmin) {
        history.push('/');
      }
    }
  }, [userInfo, userLogin]);

  useEffect(() => {
    dispatch(fetchAllOrdersAction());
  }, [dispatch]);

  //Get all orders

  const allOrders = useSelector(state => state.allOrders);
  const { loading, orders, error } = allOrders;
  console.log(orders);
  return (
    <div>
      <h1>All orders {orders?.length}</h1>
      <hr />

      {error && <h1>{error}</h1>}

      {loading ? (
        <h1>Loading</h1>
      ) : (
        orders?.map(order => (
          <div>
            <h1>Order ID: {order._id}</h1>
            <h3>user: {order.user.email}</h3>
            <h3>amount: {order.totalPrice}</h3>
            <h3>Ispaid: {order.isPaid ? 'Yes' : 'No'}</h3>
            <h3>isDelivered: {order.isDelivered ? 'Yes' : 'No'}</h3>
            <h3>date: {order.createdAt}</h3>
            <button
              onClick={() => history.push(`/admin/updatetoorder/${order._id}`)}
              className='bg-red-500'>
              Update to delivered
            </button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

export default AdminAllOrdersScreen;
