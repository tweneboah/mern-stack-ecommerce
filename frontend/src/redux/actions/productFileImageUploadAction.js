import axios from 'axios';
import {
  FILE_UPLOAD_FAIL,
  FILE_UPLOAD_REQUEST,
  FILE_UPLOAD_SUCCESS,
} from '../actionTypes/fileUploadActionTypes';

const productFileImageUploadAction = fileToUpload => async dispatch => {
  try {
    dispatch({
      type: FILE_UPLOAD_REQUEST,
    });

    const newFile = new FormData();
    newFile.append('file', fileToUpload); //Image to send
    newFile.append('upload_preset', 'mern-upload'); //cloudinary preset
    newFile.append('cloud_name', 'tweneboah'); //The name of your cloudinary;

    const { data } = await axios.post(
      'https://api.cloudinary.com/v1_1/tweneboah/image/upload',
      newFile
    );

    dispatch({
      type: FILE_UPLOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FILE_UPLOAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export { productFileImageUploadAction };
