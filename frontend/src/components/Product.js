import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Ratings';

const Product = ({ product }) => {
  return (
    <>
      <div class='w-full lg:w-1/4 sm:w-2/4 px-4 mb-8 lg:mb-0'>
        <div class='relative rounded shadow-md'>
          <Link to={`/product/${product._id}`}>
            <img src={product.image} alt='' />

            <div class='py-2 px-2 border-b'>
              <h3 class='text-xl mb-1 font-heading'>
                <a href='#'>
                  {' '}
                  <strong class=' text-gray-500 hover:text-blue-800'>
                    {product.name}
                  </strong>
                </a>
              </h3>
              <p class='text-gray-500 leading-relaxed'>{product.description}</p>
              <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}
              />
            </div>
          </Link>
          <div class='py-3 px-5'>
            <span class='text-2xl'>GHS {product.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
