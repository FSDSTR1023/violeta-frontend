import axios from 'axios'

const instance = axios.create({
	// baseURL: 'https://violeta-backend.onrender.com',
	baseURL: 'http://localhost:4000',
	withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
