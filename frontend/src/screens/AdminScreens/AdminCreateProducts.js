import React, { useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Formik, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createProductAction } from '../../redux/actions/productActions';
import { productFileImageUploadAction } from '../../redux/actions/productFileImageUploadAction';
import Axios from 'axios';

const AdminCreateProducts = ({ history }) => {
  const dispatch = useDispatch();
  //==============GET THE FILE UPLOADED AFTER ACTION
  const productImageUploaded = useSelector(state => state.productImageUploaded);
  const { loading, file, error } = productImageUploaded;
  //File upload

  return (
    <>
      {loading && <h1>File uploading please wait .....</h1>}
      {error && <h1>{error}</h1>}
      <Formik
        initialValues={{
          name: '',
          price: '',
          brand: '',
          category: '',
          countInStock: '',
          numReviews: '',
          description: '',
          color: '',
        }}
        onSubmit={values => {
          console.log(values);

          const data = {
            ...values,
            image: file.secure_url, //attach the image separately
          };
          dispatch(createProductAction(data));

          //Redirect
          //  history.push('/admin/fetchproducts');
        }}>
        {props => {
          return (
            <form onSubmit={props.handleSubmit}>
              <div class='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
                <div class='sm:mx-auto sm:w-full sm:max-w-md'>
                  <img
                    class='mx-auto h-12 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                    alt='Workflow'
                  />
                  <h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Add New Product
                  </h2>
                </div>
                <div></div>
                <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
                  <div class='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
                    <div>
                      <label
                        for='email'
                        class='block text-sm font-medium text-gray-700'>
                        Product name
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.name}
                          onChange={props.handleChange('name')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for='email'
                        class='block text-sm font-medium text-gray-700'>
                        Upload
                      </label>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product price
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.price}
                          onChange={props.handleChange('price')}
                          id='number'
                          name='number'
                          type='number'
                          autocomplete='current-text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product brand
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.brand}
                          onChange={props.handleChange('brand')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    {/* Upload image */}

                    <div class='mt-2 sm:mt-0 sm:col-span-2'>
                      <div class='max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md'>
                        <div class='space-y-1 text-center'>
                          <svg
                            class='mx-auto h-12 w-12 text-gray-400'
                            stroke='currentColor'
                            fill='none'
                            viewBox='0 0 48 48'
                            aria-hidden='true'>
                            <path
                              d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                            />
                          </svg>
                          <div class='flex text-sm text-gray-600'>
                            <label
                              for='file-upload'
                              class='relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500'>
                              <span>Upload a file</span>
                              <input
                                onChange={e =>
                                  dispatch(
                                    productFileImageUploadAction(
                                      e.target.files[0]
                                    )
                                  )
                                }
                                id='file-upload'
                                name='file-upload'
                                type='file'
                                class='sr-only'
                              />
                            </label>
                            <p class='pl-1'>or drag and drop</p>
                          </div>
                          <p class='text-xs text-gray-500'>
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* end of upload image */}
                    <div>
                      <div class='mt-1'>
                        <div>
                          <label
                            for='location'
                            class='block text-sm font-medium text-gray-700'>
                            Category
                          </label>
                          <select
                            required
                            onChange={props.handleChange('category')}
                            name='category'
                            class='mt-1 block border w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'>
                            <option>Fashion</option>
                            <option>Gents</option>
                            <option>Ladies</option>
                            <option>Hot Deals</option>
                            <option>Phone Accessories</option>
                            <option>Laptops and Accessories</option>
                            <option>Home Appliances</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product in Stock
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.countInStock}
                          onChange={props.handleChange('countInStock')}
                          type='text'
                          autocomplete='text'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Product description
                      </label>
                      <div class='mt-1'>
                        <textarea
                          cols='10'
                          value={props.values.description}
                          onChange={props.handleChange('description')}
                          id='description'
                          name='description'
                          type='textarea'
                          autocomplete='current-description'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'></textarea>
                      </div>
                    </div>

                    <div>
                      <label
                        for='password'
                        class='block text-sm font-medium text-gray-700'>
                        Number of Reviews
                      </label>
                      <div class='mt-1'>
                        <input
                          value={props.values.numReviews}
                          onChange={props.handleChange('numReviews')}
                          type='text'
                          autocomplete='current-password'
                          class='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type='submit'
                        class='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                        {!file ? 'Upload image first' : 'Create Product'}
                      </button>
                    </div>
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
