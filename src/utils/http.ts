import axios from 'axios';

const http = axios.create({
<<<<<<< HEAD
  baseURL: 'http://localhost:4010',
  headers: {
    authorization: 'Bearer 123',
  },
=======
  baseURL: 'http://localhost:3024',
>>>>>>> 04-02-installing-redux
});

export default http;
