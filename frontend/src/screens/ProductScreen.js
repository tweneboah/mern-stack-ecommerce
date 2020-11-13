import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Ratings from '../components/Ratings';
import { productDetailsActions } from '../redux/actions/productListActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ match }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productDetailsActions(match.params.id));
  }, [match.params.id]);

  const productDetails = useSelector(state => state.productDetails);
  const { loading, product, error } = productDetails;
  console.log(productDetails);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      {loading ? (
        <Loader /> ? (
          error
        ) : (
          <Message variant='danger'>{error}</Message>
        )
      ) : (
        <Row>
          <Col md={6}>
            <Image fluid src={product && product.image} alt={product.name} />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Ratings
                  value={product.rating}
                  text={`${product.numReviews} Reviews`}
                />
              </ListGroup.Item>

              <ListGroup.Item>Price: GHS ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                description: ${product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup var='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price: GHS</Col>
                    <Col>
                      <strong>{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>

              {/* Select qty */}
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Quantity</Col>
                    <Col>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={e => setQty(e.target.value)}>
                        {/* This will [...Array(product.countInStock).keys()] output 0,1,2,3 if the value is 4 */}
                        {[...Array(product.countInStock).keys()].map(x => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock === 0}>
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
