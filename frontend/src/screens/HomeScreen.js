import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { fetchAllProductsAction } from '../redux/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [dispatch]);

  const productList = useSelector(state => state.productList);
  //These are the state that are possible to be available
  const { loading, products, error } = productList;

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <section class='py-4 px-4'>
            <div class='flex flex-wrap -mx-4'>
              {products &&
                products.map(product => <Product product={product} />)}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default HomeScreen;
