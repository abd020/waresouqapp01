
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../config/supabase';


export const registerUser = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            fullName: userData.fullName || '',
            phone: userData.phone || '',
          },
        },
      });

      if (error) throw error;

      // Store user data locally
      await AsyncStorage.setItem('userData', JSON.stringify(data.user));
      
      return {
        user: data.user,
        session: data.session,
      };
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred during registration');
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
      });

      if (error) throw error;

      // Store user data and token locally
      await AsyncStorage.setItem('userData', JSON.stringify(data.user));
      if (data.session) {
        await AsyncStorage.setItem('accessToken', data.session.access_token);
      }

      return {
        user: data.user,
        session: data.session,
      };
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred during login');
    }
  }
);


export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;

      await AsyncStorage.removeItem('accessToken');
      await AsyncStorage.removeItem('userData');
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred during logout');
    }
  }
);


export const checkAuth = createAsyncThunk(
  'auth/check',
  async (_, { dispatch }) => {
    try {
      // Check if there's an active session
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) throw error;

      if (session?.user) {
        await AsyncStorage.setItem('userData', JSON.stringify(session.user));
        await AsyncStorage.setItem('accessToken', session.access_token);
        return {
          user: session.user,
          session,
        };
      }

      // Try to restore from local storage
      const userData = await AsyncStorage.getItem('userData');
      const accessToken = await AsyncStorage.getItem('accessToken');

      if (userData && accessToken) {
        return {
          user: JSON.parse(userData),
          session: { access_token: accessToken },
        };
      }

      return null;
    } catch (error) {
      console.error('Auth check error:', error);
      return null;
    }
  }
);

const initialState = {
  user: null,
  session: null,
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
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.session = action.payload.session;
        state.isAuthenticated = !!action.payload.session;
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
        state.session = action.payload.session;
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
        state.session = null;
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
          state.session = action.payload.session;
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