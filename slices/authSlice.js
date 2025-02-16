
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login, register, logout as logoutApi } from '../api';


export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await register(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred during registration');
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await login(credentials);
      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      await AsyncStorage.setItem('userData', JSON.stringify(response.data.user));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred during login');
    }
  }
);


export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logoutApi();
      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userData');
    } catch (error) {
      return rejectWithValue(error.response?.data || 'An error occurred during logout');
    }
  }
);


export const checkAuth = createAsyncThunk(
  'auth/check',
  async (_, { dispatch }) => {
    const accessToken = await AsyncStorage.getItem('accessToken');
    const userData = await AsyncStorage.getItem('userData');

    if (accessToken && userData) {
      return { user: JSON.parse(userData), accessToken };
    }

    return null;
  }
);

const initialState = {
  user: null,
  accessToken: null,
  loading: false,
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuthState: (state) => {
      state.error = null;
      state.loading = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login cases
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout cases
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.accessToken = null;
        state.isAuthenticated = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Check auth cases
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
          state.isAuthenticated = true;
        }
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { resetAuthState, setUser } = authSlice.actions;

export default authSlice.reducer;