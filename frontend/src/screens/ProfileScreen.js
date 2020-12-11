import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';

import {
  getUserDetailsAction,
  updateUserProfileAction,
} from '../redux/actions/userAction';
import { myOrdersListAction } from '../redux/actions/orderActions';

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  //get the user details
  const userDetails = useSelector(state => state.userDetails);
  const { loading, error, user } = userDetails;

  //check if user is login otherwise redirect
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  //Get the success on update and display message
  const userUpdateProfile = useSelector(state => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (user && !user.name) {
        dispatch(getUserDetailsAction('profile')); //Because we want to get the login user
        dispatch(myOrdersListAction());
      } else {
        //If there is a user
        setName(userDetails.userInfo && userDetails.userInfo.name);
        setEmail(userDetails.userInfo && userDetails.userInfo.email);
      }
    }
  }, [history, userInfo, dispatch, userDetails.userInfo]);

  //dispatch to get orders

  // useEffect(() => {
  //   dispatch(myOrdersListAction());
  // }, []);

  //get orders from store

  const myOrdersList = useSelector(state => state.myOrdersList);
  const { loading: loadingOrders, error: errorOrders, orders } = myOrdersList;
  //===================
  //update profile handler
  //===================
  const submitHandler = e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      // update profile
      dispatch(updateUserProfileAction({ name, email, password }));
    }
  };

  return (
    <Row>
      <Col md={3}>
        {' '}
        <h1>User Profile</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && (
          <Message variant='success'>Profile Updated Successfully</Message>
        )}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={name && name}
              onChange={e => setName(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              value={email && email}
              onChange={e => setEmail(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={e => setPassword(e.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId='confirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      // order.paidAt.substring(0, 10)

                      <i
                        class='fas fa-check-double'
                        style={{ color: 'green' }}></i>
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      'Delivered Date'
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className='btn-sm' variant='light'>
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default ProfileScreen;
