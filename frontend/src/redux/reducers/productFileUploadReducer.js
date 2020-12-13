import {
  FILE_UPLOAD_FAIL,
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
} from '../actionTypes/fileUploadActionTypes';

//Create Product
const productFileUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case FILE_UPLOAD_REQUEST:
      return { loading: true };
    case FILE_UPLOAD_SUCCESS:
      return { loading: false, success: true, file: action.payload };
    case FILE_UPLOAD_FAIL:
      return { loading: false, error: action.payload };
      // case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export { productFileUploadReducer };
