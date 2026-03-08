# Quick Reference - Supabase API Methods

## Authentication

```javascript
import { registerUser, loginUser, logoutUser, checkAuth } from '@/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

const dispatch = useDispatch();

// Register
dispatch(registerUser({ email, password, fullName, phone }));

// Login
dispatch(loginUser({ email, password }));

// Logout
dispatch(logoutUser());

// Check auth status
dispatch(checkAuth());

// Get auth state
const { user, session, isAuthenticated, loading, error } = useSelector(state => state.auth);
```

## API Calls

```javascript
import * as mobileApi from '@/services/mobileApi';

// HOME DATA
const { products, categories, unreadNotifications } = await mobileApi.fetchHome(productLimit, categoryLimit);

// PRODUCTS (if available)
const { products } = await mobileApi.fetchProducts(limit, offset);
const results = await mobileApi.searchProducts(query, limit, offset);

// ORDERS
const { orders } = await mobileApi.fetchOrders(role, status, limit, offset);
const { order } = await mobileApi.createOrder(orderData);

// NOTIFICATIONS
await mobileApi.markNotificationsAsRead(notificationIds?);

// HEALTH
const health = await mobileApi.checkApiHealth();
```

## Environment Variables Required

```env
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
EXPO_PUBLIC_API_URL=https://your-project.supabase.co/functions/v1/mobile-api
EXPO_PUBLIC_API_TIMEOUT=30000
EXPO_PUBLIC_ENV=development
EXPO_PUBLIC_DEBUG_MODE=true
```

## Redux State Structure

```javascript
// Auth State
{
  auth: {
    user: {
      id: string,
      email: string,
      user_metadata: { fullName?, phone?, ... }
    },
    session: { access_token, ... },
    isAuthenticated: boolean,
    loading: boolean,
    error: string | null
  }
}

// Products State
{
  products: {
    products: [],
    loading: boolean,
    error: null
  }
}

// Cart State
{
  cart: {
    items: [],
    ...
  }
}

// Wishlist State
{
  wishlist: {
    items: [],
    ...
  }
}
```

## Order Data Structure

```javascript
{
  product_id: 'uuid',
  quantity: number,
  payment_method: 'cod' | 'card' | ...,
  shipping_name: string,
  shipping_phone: string,
  shipping_address: string,
  shipping_city: string
}
```

## Files Modified/Created

- ✅ `config/supabase.js` - Supabase client initialization
- ✅ `services/mobileApi.js` - New API integration layer
- ✅ `slices/authSlice.js` - Updated for Supabase auth
- ✅ `store.js` - Added products reducer
- ✅ `api.js` - Deprecated (now redirects to mobileApi)
- ✅ `.env` - Environment variables
- ✅ `.env.example` - Template file
- ✅ `.gitignore` - Git configuration

## Quick Checklist

- [ ] Add Supabase credentials to `.env`
- [ ] Run `npm install`
- [ ] Test SignUpScreen with registerUser
- [ ] Test SignInScreen with loginUser
- [ ] Test HomeScreen with fetchHome
- [ ] Test CartScreen with createOrder
- [ ] Test NotificationScreen with markNotificationsAsRead
- [ ] Deploy to production

---

For detailed documentation, see `SUPABASE_INTEGRATION.md`
