import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Form, Button, Card } from 'react-bootstrap';
import { addToCart } from '../redux/actions/cartActions';
import Message from '../components/Message';

//We need the id from match.params.id;
//To get value from query string we will use location.search

const CartScreen = ({ match, location, histroy }) => {
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

  return <div>cart</div>;
};

export default CartScreen;
