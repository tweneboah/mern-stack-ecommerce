import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import { productListActions } from '../redux/actions/productListActions';
const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productListActions());
  }, [dispatch]);

  const productList = useSelector(state => state.productList);
  //These are the state that are possible to be available
  const { loading, products, error } = productList;

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Row>
          {products &&
            products.map(product => (
              <Col sm={12} md={4} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
