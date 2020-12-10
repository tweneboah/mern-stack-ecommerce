import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
    <div className='h-screen'>
      <div className='mt-5 text-center bg-gray-200 py-4'>
        <h1>Shopping Cart</h1>
      </div>
      {cartItems.length === 0 ? (
        <Message>
          Your cart is empty<Link>Go Back</Link>
        </Message>
      ) : (
        <div className='flex flex-col lg:flex-row'>
          <div>
            <div class='flex flex-col'>
              <div class='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div class='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                  <div class='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                    <table class='min-w-full divide-y divide-gray-200'>
                      <thead class='bg-gray-50'></thead>
                      <tbody class='bg-white divide-y divide-gray-200'>
                        {cartItems.map(item => (
                          <tr>
                            <td class='px-6 py-4 whitespace-nowrap'>
                              <div class='flex items-center'>
                                <div class='flex-shrink-0 h-10 w-10'>
                                  <img
                                    class='h-10 w-10 rounded-full'
                                    src={item.image}
                                  />
                                </div>
                                <div class='ml-4'>
                                  <div class='text-sm text-gray-500'>
                                    <Link to={`/product/${item.product}`}>
                                      {item.name}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td class='px-6 py-4 whitespace-nowrap'>
                              <div class='text-sm text-gray-900'>
                                GHS {item.price}
                              </div>
                            </td>
                            <td class='px-6 py-4 whitespace-nowrap'>
                              <select
                                value={item.qty}
                                onChange={e =>
                                  dispatch(
                                    addToCart(
                                      item.product,
                                      Number(e.target.value)
                                    )
                                  )
                                }
                                class=' block  shadow-lg pl-3 pr-10 py-2  border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100 rounded-md'>
                                {[...Array(item.countInStock).keys()].map(x => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </select>
                            </td>
                            <td class='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                              <button
                                onClick={() =>
                                  removeFromCartHandler(item.product)
                                }
                                className='bg-red-500 text-yellow-50 p-2 rounded-lg'>
                                Remove
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-100 border md:w-full mt-6 mr-4 rounded-md  ml-4 text-center flex justify-center items-center flex-col'>
            <div className=''>
              <h2 className='underline'>
                Subtoal ({' '}
                {cartItems.reduce((acc, curr) => {
                  return acc + curr.qty;
                }, 0)}
                )
              </h2>
              {/* PRICE */}
              <h2 className='font-mono mt-4 text-green-600'>
                {' '}
                GHS{' '}
                {cartItems
                  .reduce((acc, curr) => acc + curr.qty * curr.price, 0)
                  .toFixed(2)}
              </h2>
            </div>
            <button
              disabled={cartItems.length === 0}
              className=' p-2 border-yellow-400 shadow mt-4 rounded-full bg-green-900 text-white px-3'
              onClick={checkoutHandler}>
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartScreen;
