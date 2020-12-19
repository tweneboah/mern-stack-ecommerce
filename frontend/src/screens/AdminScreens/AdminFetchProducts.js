import React, { useEffect } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { fetchAllProductsAction } from '../../redux/actions/productActions';

const AdminFetchProducts = ({ history }) => {
  //Redirect is not admin
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  if (userInfo && !userInfo.isAdmin) {
    history.push('/');
  }

  //Fetch all produts
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction(''));
  }, [dispatch]);

  const productList = useSelector(state => state.productList);

  const { loading, products, error } = productList;
  console.log(loading, products);
  return (
    <>
      {/* <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Link to='/admin/createproducts'>
            <Button className='my-3'>
              <i className='fas fa-plus'></i> Create Product
            </Button>
          </Link>
        </Col>
      </Row>
      {loading && <Loader />}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>CATEGORY</th>
                <th>BRAND</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product._id}>
                  <td>
                    <img
                      class='inline-block h-14 w-14 rounded-full'
                      src={product.image}
                      alt=''></img>
                  </td>
                  <td>
                    <Link to='/'>{product.name}</Link>
                  </td>
                  <td>${product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                  <td>
                    <LinkContainer to={`/admin/edit/product/${product._id}`}>
                      <Button variant='light' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <Button variant='danger' className='btn-sm'>
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
 */}

      <div className='flex flex-col min-h-screen'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Product
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Amount
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Brand
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  {products?.map(product => (
                    <tr>
                      <td className='px-2 py-1 whitespace-nowrap'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 h-10 w-10'>
                            <img
                              className='h-10 w-10 rounded-full'
                              src={product.image}
                              alt=''
                            />
                          </div>
                          <div className='ml-4'>
                            <div className='text-sm font-medium text-gray-900'>
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-900'>
                          {product.price}
                        </div>
                      </td>

                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800'>
                          {product.category}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                        {product.brand}
                      </td>

                      <td className='px-2 py-2 whitespace-nowrap'>
                        <Link to={`/admin/edit/product/${product._id}`}>
                          <button variant='light' className='btn-sm'>
                            <i className='fas fa-edit'></i>
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminFetchProducts;
