import { supabase } from '../config/supabase';

const MOBILE_API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_TIMEOUT = parseInt(process.env.EXPO_PUBLIC_API_TIMEOUT || '30000', 10);

/**
 * Make authenticated requests to Supabase mobile-api edge function
 */
const mobileApiFetch = async (endpoint, options = {}) => {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const headers = {
      'Content-Type': 'application/json',
      apikey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      ...options.headers,
    };

    if (session?.access_token) {
      headers.Authorization = `Bearer ${session.access_token}`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    const response = await fetch(`${MOBILE_API_URL}${endpoint}`, {
      ...options,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `API Error: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`Mobile API Error [${endpoint}]:`, error);
    throw error;
  }
};

// ============ HOME & PRODUCTS ============

export const fetchHome = async (productLimit = 10, categoryLimit = 12) => {
  return mobileApiFetch(
    `/home?productLimit=${productLimit}&categoryLimit=${categoryLimit}`,
    { method: 'GET' }
  );
};

export const fetchProducts = async (limit = 20, offset = 0) => {
  return mobileApiFetch(
    `/products?limit=${limit}&offset=${offset}`,
    { method: 'GET' }
  );
};

export const searchProducts = async (query, limit = 20, offset = 0) => {
  return mobileApiFetch(
    `/products/search?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`,
    { method: 'GET' }
  );
};

// ============ ORDERS ============

export const fetchOrders = async (role = 'buyer', status = null, limit = 20, offset = 0) => {
  const params = new URLSearchParams({
    role,
    limit: limit.toString(),
    offset: offset.toString(),
  });

  if (status) {
    params.append('status', status);
  }

  return mobileApiFetch(`/orders?${params.toString()}`, { method: 'GET' });
};

export const createOrder = async (orderData) => {
  return mobileApiFetch('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  });
};

// ============ NOTIFICATIONS ============

export const markNotificationsAsRead = async (notificationIds = null) => {
  const body = {};
  if (notificationIds && Array.isArray(notificationIds)) {
    body.notification_ids = notificationIds;
  }

  return mobileApiFetch('/notifications/read', {
    method: 'PATCH',
    body: JSON.stringify(body),
  });
};

// ============ AUTHENTICATION ============

export const register = async (email, password, metadata = {}) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    console.error('Logout error:', error);
    throw error;
  }
};

export const requestPasswordReset = async (email) => {
  try {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Password reset request error:', error);
    throw error;
  }
};

export const resetPassword = async (newPassword) => {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Password reset error:', error);
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) throw error;
    return user;
  } catch (error) {
    console.error('Get current user error:', error);
    return null;
  }
};

export const getSession = async () => {
  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) throw error;
    return session;
  } catch (error) {
    console.error('Get session error:', error);
    return null;
  }
};

// ============ HEALTH CHECK ============

export const checkApiHealth = async () => {
  try {
    return await mobileApiFetch('/health', { method: 'GET' });
  } catch (error) {
    console.error('API health check failed:', error);
    return { ok: false, error: error.message };
  }
};

export default {
  fetchHome,
  fetchProducts,
  searchProducts,
  fetchOrders,
  createOrder,
  markNotificationsAsRead,
  register,
  login,
  logout,
  requestPasswordReset,
  resetPassword,
  getCurrentUser,
  getSession,
  checkApiHealth,
};
