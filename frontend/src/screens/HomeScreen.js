import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import Ratings from '../components/Ratings';
import { fetchAllProductsAction } from '../redux/actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const [productSearchTerm, setproductSearchTerm] = useState('');
  useEffect(() => {
    dispatch(fetchAllProductsAction(productSearchTerm));
  }, [dispatch]);

  const productList = useSelector(state => state.productList);
  //These are the state that are possible to be available
  const { loading, products, error } = productList;

  return (
    <div>
      <HomeBanner />

      <div class='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div class='relative max-w-7xl mx-auto'>
          <div class='text-center'>
            <h2 class='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
              Latest Products
            </h2>
            <p class='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>

            <div className='text-center flex justify-center'>
              <input
                onChange={e => dispatch(fetchAllProductsAction(e.target.value))}
                type='text'
                class='py-2 bg-gray-100 px-3 text-center border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-1/4 sm:text-sm border-gray-500 rounded-md'
                placeholder='Search for product'
              />
            </div>
          </div>

          <div class='mt-12   grid gap-3 lg:grid-cols-4 lg:max-w-none md:grid-cols-3 sm:grid-cols-2'>
            {/* Card 1 */}

            {products?.map(product => (
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
  );
};

export default HomeScreen;

// import React from 'react';

// const HomeScreen = () => {
//   return (
//     <div>
//       <div class='relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
//         <div class='relative max-w-7xl mx-auto'>
//           <div class='text-center'>
//             <h2 class='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
//               From the blog
//             </h2>
//             <p class='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
//               libero labore natus atque, ducimus sed.
//             </p>
//           </div>
//           <div class='mt-12   grid gap-3 lg:grid-cols-4 lg:max-w-none md:grid-cols-3 sm:grid-cols-2'>
//             {/* Card 1 */}

//             <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
//               <div class='flex-shrink-0'>
//                 <img
//                   class='h-48 w-full object-cover'
//                   src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
//                   alt=''
//                 />
//               </div>
//               <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
//                 <div class='flex-1'>
//                   <p class='text-sm font-medium text-indigo-600'>
//                     <a href='#' class='hover:underline'>
//                       New
//                     </a>
//                   </p>
//                   <a href='#' class='block mt-2'>
//                     <p class='text-xl font-semibold text-gray-900'>
//                       Boost your conversion rate
//                     </p>
//                     <p class='mt-3 text-base text-gray-500'>
//                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                       Architecto accusantium praesentium eius, ut atque fuga
//                       culpa, similique sequi cum eos quis dolorum.
//                     </p>
//                   </a>
//                 </div>
//                 <div class='mt-6 flex items-center'>
//                   <div class='flex-shrink-0'>
//                     <a href='#'>
//                       <span class='sr-only'>Roel Aufderehar</span>
//                       <img
//                         class='h-10 w-10 rounded-full'
//                         src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//                         alt=''
//                       />
//                     </a>
//                   </div>
//                   <div class='ml-3'>
//                     <p class='text-sm font-medium text-gray-900'>
//                       <a href='#' class='hover:underline'>
//                         Roel Aufderehar
//                       </a>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeScreen;
