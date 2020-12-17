import React, { useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductAction,
  fetchAllProductsAction,
  updateProductAction,
} from '../../redux/actions/productActions';
import { productFileImageUploadAction } from '../../redux/actions/productFileImageUploadAction';

const AdminEditProduct = ({ history, match }) => {
  const dispatch = useDispatch();

  //===================IMAGE UPLOAD=================
  //File Upload Logic
  const productImageUploaded = useSelector(state => state.productImageUploaded);
  const { loading, file, error } = productImageUploaded;

  console.log(file);
  //======FETCH ALL PRODUCTS==================

  useEffect(() => {
    dispatch(fetchAllProductsAction());
  }, [match.params.id]);
  const productList = useSelector(state => state.productList);

  const { products } = productList;
  //find the particular product whos id is in the param and populate it in the form
  const product =
    products && products.find(product => product._id === match.params.id);

  return (
    <>
      {loading && <h1>File uploading please wait .....</h1>}
      {error && <h1>{error}</h1>}
      {!product & !match.params.id ? (
        <h1>product loading</h1>
      ) : (
        <Formik
          initialValues={{
            name: product && product.name,
            price: product && product.price,
            brand: product && product.brand,
            category: product && product.category,
            countInStock: product && product.countInStock,
            numReviews: product && product.numReviews,
            description: product && product.description,
          }}
          onSubmit={values => {
            console.log(values);
            const data = {
              ...values,
              image: file ? file.secure_url : product.image,
            };
            dispatch(updateProductAction(match.params.id, data));
            //Redirect
            history.push('/admin/fetchproducts');
          }}>
          {props => {
            return (
              <>
                <form onSubmit={props.handleSubmit}>
                  <div className='container'>
                    <div className='row justify-content-center'>
                      <div className='col-md-5 col-lg-4'>
                        <label className='sr-only' htmlFor='input1-signin-03'>
                          Name
                        </label>
                        <input
                          value={props.values.name}
                          onChange={props.handleChange('name')}
                          className='form-control my-3 bg-light'
                          id='input1-signin-03'
                          type='text'
                          placeholder='Enter Product Name'
                        />
                        <label className='sr-only' htmlFor='input2-signin-03'>
                          Price
                        </label>
                        <input
                          value={props.values.price}
                          onChange={props.handleChange('price')}
                          className='form-control my-3 bg-light'
                          id='input2-signin-03'
                          type='text'
                          placeholder='Enter Product Price'
                        />
                        <label htmlFor='input2-signin-03'>Image</label>
                        <input
                          onChange={e =>
                            dispatch(
                              productFileImageUploadAction(e.target.files[0])
                            )
                          }
                          className='form-control my-3 bg-gray-200'
                          id='input2-signin-03'
                          type='file'
                          placeholder='Image'
                        />
                        <label className='sr-only' htmlFor='input2-signin-03'>
                          Brand
                        </label>
                        <input
                          value={props.values.brand}
                          onChange={props.handleChange('brand')}
                          className='form-control my-3 bg-light'
                          id='input2-signin-03'
                          type='text'
                          placeholder='Enter Product Brand'
                        />
                        <label className='sr-only' htmlFor='input2-signin-03'>
                          category
                        </label>
                        <input
                          value={props.values.category}
                          onChange={props.handleChange('category')}
                          className='form-control my-3 bg-light'
                          id='input2-signin-03'
                          type='text'
                          placeholder='Enter Product Category'
                        />

                        <label className='sr-only' htmlFor='input2-signin-03'>
                          In Stock
                        </label>
                        <input
                          value={props.values.countInStock}
                          onChange={props.handleChange('countInStock')}
                          className='form-control my-3 bg-light'
                          id='input2-signin-03'
                          type='text'
                          placeholder='Enter Count in Stock'
                        />
                        <label className='sr-only' htmlFor='input2-signin-03'>
                          description
                        </label>
                        <input
                          value={props.values.description}
                          onChange={props.handleChange('description')}
                          className='form-control my-3 bg-light'
                          id='input2-signin-03'
                          type='text'
                          placeholder='Enter Product Description'
                        />

                        <label className='sr-only' htmlFor='input2-signin-03'>
                          numReviews
                        </label>
                        <input
                          value={props.values.numReviews}
                          onChange={props.handleChange('numReviews')}
                          className='form-control my-3 bg-light'
                          id='input2-signin-03'
                          type='text'
                          placeholder='Enter Number of reviews'
                        />

                        <button
                          className={`btn btn-primary btn-block py-2 my-3 ${
                            loading && !file && 'disabled'
                          }`}>
                          update Product
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <button
                  onClick={() => {
                    dispatch(deleteProductAction(match.params.id));
                    history.push('/admin/fetchproducts');
                  }}
                  className={` text-white bg-red-800 btn-block py-2 my-3 ${
                    loading && !file && 'disabled'
                  }`}>
                  Delete Product
                </button>
              </>
            );
          }}
        </Formik>
      )}
    </>
  );
};

export default AdminEditProduct;
