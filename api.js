/**
 * @deprecated Use services/mobileApi.js instead
 * This file is kept for backward compatibility only.
 * All new code should use the Supabase mobile-api edge functions.
 */

import { supabase } from './config/supabase';
import mobileApi from './services/mobileApi';

// Re-export all mobile API functions
export const register = mobileApi.register;
export const login = mobileApi.login;
export const logout = mobileApi.logout;
export const requestPasswordReset = mobileApi.requestPasswordReset;
export const resetPassword = mobileApi.resetPassword;

// Export Supabase client for direct access if needed
export { supabase };

// Export mobile API for advanced usage
export { default as mobileApi } from './services/mobileApi';

export default mobileApi;