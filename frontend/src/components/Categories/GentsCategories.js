import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllProductsAction } from '../../redux/actions/productActions';
import Loader from '../Loader';
import Message from '../Message';
import Ratings from '../Ratings';

const GentsCategories = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [dispatch]);

  const productList = useSelector(state => state.productList);

  const { loading, products, error } = productList;

  const fashions =
    products && products.filter(product => product.category === 'Gents');

  console.log(fashions);
  return (
    <>
      {fashions === undefined ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div>
            <div class='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
              <div class='relative max-w-7xl mx-auto'>
                <div class='text-center'>
                  <h2 class='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
                    Fashion - ({fashions?.length})
                  </h2>
                  <p class='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Ipsa libero labore natus atque, ducimus sed.
                  </p>
                </div>
                <div class='mt-12   grid gap-3 lg:grid-cols-4 lg:max-w-none md:grid-cols-3 sm:grid-cols-2'>
                  {/* Card 1 */}

                  {fashions?.map(product => (
                    <>
                      <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
                        <div class='flex-shrink-0'>
                          <Link to={`/product/${product._id}`}>
                            <img
                              class='h-48 w-full object-cover'
                              src={product.image}
                              alt=''
                            />
                          </Link>
                        </div>

                        <div class='absolute bg-red-600 py-1 px-3 text-white text-base'>
                          New
                        </div>
                        <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
                          <div class='flex-1'>
                            <p class='text-sm font-medium text-indigo-600'>
                              <a href='#' class='hover:underline'>
                                New
                              </a>
                            </p>
                            <a href='#' class='block mt-2'>
                              <p class='text-xl font-semibold text-gray-900'>
                                {product.name}
                              </p>
                              <p class='mt-3 text-base text-gray-500'>
                                {product.description}
                              </p>

                              <Ratings
                                value={product.rating}
                                text={`${product.numReviews} Reviews`}
                              />
                            </a>
                          </div>
                          <div class='mt-6 flex items-center'>
                            <div class='flex-shrink-0'>
                              <a href='#'>
                                <span class='sr-only'>Roel Aufderehar</span>
                                <img
                                  class='h-10 w-10 rounded-full'
                                  src={product.image}
                                  alt=''
                                />
                              </a>
                            </div>
                            <div class='ml-3'>
                              <p class='text-sm font-medium text-gray-900'>
                                <a href='#' class='hover:underline'>
                                  {product.category}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GentsCategories;
