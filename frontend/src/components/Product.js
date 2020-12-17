import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from '../components/Ratings';

const Product = ({ product }) => {
  return (
    <>
      {/* <div class='bg-gray-100 w-full lg:w-1/4 sm:w-2/4 px-4 mb-8 lg:mb-0'>
        <div class='bg-white relative rounded shadow-md'>
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
      </div> */}
      <div class=' w-full lg:w-2/6 mb-10 sm:w-2/4 px-4'>
        <div class='bg-white shadow-2xl'>
          <div>
            <Link to={`/product/${product._id}`}>
              <img className='h-96 w-full' src={product.image} />
            </Link>
          </div>
          <div class='px-4 py-2 mt-2 bg-white'>
            <h2 class='font-bold text-2xl text-gray-800'> {product.name}</h2>
            <span class='text-2xl'>GHS {product.price}</span>
            <p class='sm:text-sm text-xs text-gray-700 px-2 mr-1 my-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              reiciendis ad architecto at aut placeat quia, minus dolor
              praesentium officia maxime deserunt porro amet ab debitis deleniti
              modi soluta similique...
            </p>
            <Rating
              value={product.rating}
              text={`${product.numReviews} Reviews`}
            />
            <div class='user flex items-center -ml-3 mt-8 mb-4'>
              <div class='user-logo'>
                <img
                  class='w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-full mx-4  shadow'
                  src={product.image}
                  alt='avatar'
                />
              </div>

              <button class='bg-red-500 inline-block px-6 py-2 text-xl font-medium leading-6 text-center text-white uppercase transition   rounded ripple hover:bg-red-100 focus:outline-none'>
                70% off
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
