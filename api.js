import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'api__url'; 

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        
        const refreshToken = await AsyncStorage.getItem('refreshToken');
        const response = await axios.post(`${BASE_URL}/refresh-token`, { refreshToken });
        const { accessToken } = response.data;
        await AsyncStorage.setItem('accessToken', accessToken);
        api.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
       
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);





export const register = (userData) => {
  return api.post('/register', userData);
};

export const login = (credentials) => {
  return api.post('/login', credentials);
};

export const logout = () => {
  return api.post('/logout');
};





// Password reset 
export const requestPasswordReset = (email) => {
  return api.post('/password/reset-request', { email });
};

export const resetPassword = (token, newPassword) => {
  return api.post('/password/reset', { token, newPassword });
};



export default api;