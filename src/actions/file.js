import axios from 'axios';
import { setFiles, addFile } from '../reducers/fileReducer';

export const getFiles = (dirId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/files${dirId ? '?parent=' + dirId : ''}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      );
      dispatch(setFiles(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const createDir = (dirId, name) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:8080/api/files`, {
        name,
        parent: dirId,
        type: 'directory',
      },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      );
      dispatch(addFile(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const uploadFile = (file, dirId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      if (dirId) {
        formData.append('parent', dirId)
      }

      const response = await axios.post(
        `http://localhost:8080/api/files`, formData,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
          onUploadProgress: (progressEvent) => {
            const totalLength = progressEvent.lengthComputable();
          },
        },
      );

      dispatch(addFile(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};
