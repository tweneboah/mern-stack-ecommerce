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
    dispatch(fetchAllProductsAction());
  }, [dispatch]);

  const productList = useSelector(state => state.productList);

  const { loading, products, error } = productList;
  console.log(loading, products);
  return (
    <>
      <Row className='align-items-center'>
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
    </>
  );
};

export default AdminFetchProducts;
