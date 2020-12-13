import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Ratings from '../components/Ratings';
import { productDetailsActions } from '../redux/actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productDetailsActions(match.params.id));
  }, [match.params.id]);

  const productDetails = useSelector(state => state.productDetails);
  const { loading, product, error } = productDetails;

  //This will send to cart page but it will send the product id and qty as a query params
  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

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
        <section class='py-12 px-4'>
          <div class='flex flex-wrap -mx-4'>
            <div class='lg:w-1/2 px-4 mb-4 lg:mb-0'>
              <img
                class='rounded shadow-md'
                src={product && product.image}
                alt={product.name}
              />
              <h2 class='text-4xl mb-4 font-heading'>
                All Purpose Paper 80gsm - 500 sheets - 10 Reams
              </h2>
              <p class='mb-6 text-gray-500 leading-relaxed'>
                Premium quality home and office paper for all printing and
                copying machines. It is a flexible paper capable of switching
                from one machine to another with great print results.
              </p>
              <Ratings
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </div>
            <div class='lg:w-1/2 w-full px-4'>
              <div className='flex mb-4 mt-4 justify-around items-center bg-gray-100 rounded-full shadow-md py-3 text-lg text-gray-600'>
                <div className=''>Price : GHS</div>
                <div>
                  <strong>{product.price}</strong>
                </div>
              </div>
              <div className='flex mb-4 mt-4 justify-around items-center bg-gray-100 rounded-full shadow-md py-3 text-lg text-gray-600'>
                <div className=''>Status</div>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </div>

              <div className='flex mb-4 mt-4 justify-around items-center bg-gray-100 rounded-full shadow-md py-2 text-lg text-gray-600'>
                <div className=''>Quantity</div>
                {product.countInStock > 0 && (
                  <>
                    <select
                      value={qty}
                      onChange={e => setQty(e.target.value)}
                      class=' block  pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                      {[...Array(product.countInStock).keys()].map(x => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </>
                )}
              </div>

              <div className='flex justify-around'>
                <button
                  onClick={addToCartHandler}
                  disabled={product.countInStock === 0}
                  class={`inline-block w-60 py-3 mb-5 rounded-lg px-4 leading-none text-white  ${
                    product.countInStock === 0
                      ? 'bg-red-400 cursor-not-allowed'
                      : 'bg-blue-900'
                  } md:rounded-l-none`}>
                  Add To Cart
                </button>
              </div>
              <div class='pt-4 border-t'>
                <a class='text-blue-700 hover:underline' href='#'>
                  Add to favorites
                </a>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductScreen;
