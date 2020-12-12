import React, { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { createProductAction } from '../../redux/actions/productListActions';
import { productFileImageUploadAction } from '../../redux/actions/productFileImageUploadAction';

const AdminCreateProducts = () => {
  const [file, setFile] = useState('initialState');
  console.log(file);

  const uploadFile = () => {
    dispatch(productFileImageUploadAction(file));
  };
  const dispatch = useDispatch();
  return (
    <>
      <input type='file' onChange={e => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload file</button>
      <Formik
        initialValues={{
          name: '',
          price: '',
          image: '',
          brand: '',
          category: '',
          countInStock: '',
          numReviews: '',
          description: '',
        }}
        onSubmit={values => dispatch(createProductAction(values))}>
        {props => {
          return (
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
                      placeholder='Name'
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
                      placeholder='Enter Price'
                    />
                    <label className='sr-only' htmlFor='input2-signin-03'>
                      Image
                    </label>
                    <input
                      value={props.values.image}
                      onChange={props.handleChange('image')}
                      className='form-control my-3 bg-light'
                      id='input2-signin-03'
                      type='text'
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
                      placeholder='Enter Brand'
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
                      placeholder='Enter Category'
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
                      placeholder='Description'
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
                      placeholder='Description'
                    />

                    <button className='btn btn-primary btn-block py-2 my-3'>
                      Create Product
                    </button>
                  </div>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </>
  );
};

export default AdminCreateProducts;
