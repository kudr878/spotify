import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const uploadAlbum = async () => {
  try {
    const form = new FormData();

    form.append('name', 'test name');
    form.append('desc', 'test description');
    form.append('bgColor', '#ffffff');

    form.append(
      'image',
      fs.createReadStream('../frontend/src/assets/frontend-assets/img10.jpg')
    );

    const response = await axios.post(
      'http://localhost:4000/api/album/add',
      form,
      {
        headers: {
          ...form.getHeaders(),
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error uploading album:', error.message);
  }
};

uploadAlbum();
