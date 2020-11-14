import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Form,
  Button,
  Card,
  Image,
} from 'react-bootstrap';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import Message from '../components/Message';

//We need the id from match.params.id;
//To get value from query string we will use location.search

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  //Remove cart item

  const removeFromCartHandler = id => {
    dispatch(removeFromCart(id));
  };

  //checkout
  const checkoutHandler = () => {
    //redirect to login if it has a queryString of shipping
    history.push('/login?redirect=shipping'); //This means if not login it will take you to login otherwise redirect to shipping
  };
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty<Link>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} fluid rounded alt={item.name} />
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>{item.price}</Col>
                  <Col md={2}>
                    {/* We want to be able to change the quantity from here */}

                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={e =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }>
                      {/* This will [...Array(product.countInStock).keys()] output 0,1,2,3 if the value is 4 */}
                      {[...Array(item.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      variant='danger'
                      type='button'
                      onClick={() => removeFromCartHandler(item.product)}>
                      remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtoal ({' '}
                {cartItems.reduce((acc, curr) => {
                  return acc + curr.qty;
                }, 0)}
                )
              </h2>
              {/* PRICE */}
              GHS{' '}
              {cartItems
                .reduce((acc, curr) => acc + curr.qty * curr.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <Button
              disabled={cartItems.length === 0}
              className='btn-block'
              onClick={checkoutHandler}>
              Proceed to checkout
            </Button>
            <ListGroup.Item></ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
