import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

const uploadSong = async () => {
  try {
    const form = new FormData();

    form.append('name', 'test name');
    form.append('desc', 'test description');
    form.append('album', 'test album');

    form.append(
      'audio',
      fs.createReadStream('../frontend/src/assets/frontend-assets/song1.mp3')
    );
    form.append(
      'image',
      fs.createReadStream('../frontend/src/assets/frontend-assets/img1.jpg')
    );

    const response = await axios.post(
      'http://localhost:4000/api/song/add',
      form,
      {
        headers: {
          ...form.getHeaders(),
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.error('Error uploading song:', error.message);
  }
};

uploadSong();
