import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetailsActon } from '../redux/actions/orderActions';
import Message from '../components/Message';
import Loader from '../components/Loader';

const OrderScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  //This component contains the summary of our order
  const cart = useSelector(state => state.cart);
  //calculate price

  const orderDetails = useSelector(state => state.orderDetails);
  const { order, loading, error } = orderDetails;

  // useEffect(() => {
  //   dispatch(getOrderDetailsActon(match.params.id));
  // }, [match]);

  useEffect(() => {
    if (!order || order._id !== match.params.id) {
      dispatch(getOrderDetailsActon(match.params.id));
    }
  }, [order, match]);

  //Send To Pay

  const sendToPay = () => {
    history.push('/pay', {
      orderId: order._id,
      userEmail: order.user.email,
      totalAmount: order.totalPrice.toString(),
    });
  };
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger' />
  ) : (
    <>
      <h1>Order ID {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <p>
                <h2>Shipping</h2>
                <strong>Name: </strong>
                {order.user.name}
              </p>
              <p>
                Email:{' '}
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                {order.shippingAddress.postalCode},{' '}
                {order.shippingAddress.country}
              </p>
              <p>
                {order.isDelivered ? (
                  <Message variant='success'>
                    Delivered on {order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant='danger'>Not Delivered</Message>
                )}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>
                <h2>Payment Method</h2>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              <p>
                {order.isPaid ? (
                  <Message variant='success'>Paid on {order.paidAt}</Message>
                ) : (
                  <Message variant='danger'>Not Paid</Message>
                )}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message>Your order is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroup.Item>
              <ListGroup.Item>
                {!order.isPaid ? (
                  <Button
                    onClick={sendToPay}
                    type='button'
                    className='btn-block'
                    disabled={order.cartItems === 0}>
                    Continue to Payment
                  </Button>
                ) : (
                  <button
                    disabled
                    className='bg-red-900 text-white py-3 px-2 block w-full text-2xl cursor-not-allowed'>
                    Already Paid
                  </button>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
