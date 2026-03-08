# Supabase Integration Guide

## Overview
Your WareSouq mobile app has been successfully integrated with Supabase and the new mobile-api Edge Functions. This guide will help you complete the setup and use the new API endpoints.

## 📋 Setup Instructions

### 1. Configure Environment Variables
Edit your `.env` file and add your Supabase credentials:

```env
# Supabase Configuration
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# API Configuration (Supabase Edge Function)
EXPO_PUBLIC_API_URL=https://your-project.supabase.co/functions/v1/mobile-api
EXPO_PUBLIC_API_TIMEOUT=30000

# Environment
EXPO_PUBLIC_ENV=development

# Feature Flags
EXPO_PUBLIC_DEBUG_MODE=true
```

### 2. Install Dependencies
```bash
npm install
```

## 🔐 Authentication Flow

### Register a New User
```javascript
import { registerUser } from '@/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';

function SignUpScreen() {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated } = useSelector(state => state.auth);

  const handleSignUp = async () => {
    const result = await dispatch(registerUser({
      email: 'user@example.com',
      password: 'secure_password',
      fullName: 'John Doe',
      phone: '+1234567890',
    }));

    if (registerUser.fulfilled.match(result)) {
      // Navigate to login or verification screen
    }
  };

  return (
    // Your component JSX
  );
}
```

### Login User
```javascript
import { loginUser } from '@/slices/authSlice';

const handleLogin = async () => {
  const result = await dispatch(loginUser({
    email: 'user@example.com',
    password: 'secure_password',
  }));

  if (loginUser.fulfilled.match(result)) {
    // User is now authenticated
  }
};
```

### Logout User
```javascript
import { logoutUser } from '@/slices/authSlice';

const handleLogout = async () => {
  await dispatch(logoutUser());
};
```

### Check Authentication Status
```javascript
import { checkAuth } from '@/slices/authSlice';
import { useEffect } from 'react';

useEffect(() => {
  dispatch(checkAuth());
}, [dispatch]);
```

## 📱 API Endpoints

### Home Screen (Dashboard)
Fetches categories, latest products, and unread notifications count.

```javascript
import { fetchHome } from '@/services/mobileApi';

const handleFetchHome = async () => {
  try {
    const data = await fetchHome(
      10,  // productLimit
      12   // categoryLimit
    );
    
    console.log('Products:', data.products);
    console.log('Categories:', data.categories);
    console.log('Unread Notifications:', data.unreadNotifications);
  } catch (error) {
    console.error('Error fetching home data:', error);
  }
};
```

**Response Structure:**
```json
{
  "products": [
    {
      "id": "product-id",
      "name": "Product Name",
      "price": 99.99,
      "image_url": "https://example.com/image.jpg",
      "stock": 50,
      "min_order_qty": 1,
      "unit": "piece",
      "status": "active",
      "categories": {
        "name": "Electronics",
        "slug": "electronics"
      }
    }
  ],
  "categories": [
    {
      "id": "cat-id",
      "name": "Electronics",
      "name_ar": "الإلكترونيات",
      "slug": "electronics",
      "icon": "icon-url"
    }
  ],
  "unreadNotifications": 3
}
```

### Orders

#### Fetch Orders
```javascript
import { fetchOrders } from '@/services/mobileApi';

// Buyer's orders
const buyerOrders = await fetchOrders(
  'buyer',        // role
  'completed',    // status (optional)
  20,             // limit
  0               // offset
);

// Seller's orders
const sellerOrders = await fetchOrders(
  'seller',
  null,
  20,
  0
);
```

**Response Structure:**
```json
{
  "orders": [
    {
      "id": "order-id",
      "status": "completed",
      "quantity": 5,
      "total_price": 499.95,
      "payment_method": "cod",
      "tracking_number": "TRACK123",
      "created_at": "2024-03-07T10:00:00Z",
      "updated_at": "2024-03-07T15:00:00Z",
      "products": {
        "id": "product-id",
        "name": "Product Name",
        "image_url": "https://example.com/image.jpg",
        "price": 99.99
      }
    }
  ],
  "limit": 20,
  "offset": 0
}
```

#### Create Order
```javascript
import { createOrder } from '@/services/mobileApi';

const orderData = {
  product_id: 'product-uuid',
  quantity: 5,
  payment_method: 'cod', // 'cod', 'card', etc.
  shipping_name: 'John Doe',
  shipping_phone: '+1234567890',
  shipping_address: '123 Main St',
  shipping_city: 'Cairo',
};

const response = await createOrder(orderData);
console.log('Order created:', response.order);
```

**Response Structure:**
```json
{
  "order": {
    "id": "order-id",
    "status": "pending",
    "quantity": 5,
    "total_price": 499.95,
    "payment_method": "cod",
    "created_at": "2024-03-07T10:00:00Z"
  }
}
```

### Notifications

#### Mark Notifications as Read
```javascript
import { markNotificationsAsRead } from '@/services/mobileApi';

// Mark all unread as read
await markNotificationsAsRead();

// Mark specific notifications as read
await markNotificationsAsRead([
  'notification-id-1',
  'notification-id-2',
]);
```

### Health Check
```javascript
import { checkApiHealth } from '@/services/mobileApi';

const health = await checkApiHealth();
console.log('API Status:', health);
```

## 🔄 Integration with Screens

### HomeScreen Example
```javascript
import React, { useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { fetchHome } from '@/services/mobileApi';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState(null);
  const [error, setError] = useState(null);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const data = await fetchHome(12, 12);
        setHomeData(data);
      } catch (err) {
        setError(err.message);
        console.error('Error loading home:', err);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <ScrollView>
      {/* Display categories */}
      {homeData?.categories.map(category => (
        <Text key={category.id}>{category.name}</Text>
      ))}

      {/* Display products */}
      {homeData?.products.map(product => (
        <View key={product.id}>
          <Text>{product.name}</Text>
          <Text>${product.price}</Text>
        </View>
      ))}

      {/* Display notification badge */}
      {homeData?.unreadNotifications > 0 && (
        <Badge count={homeData.unreadNotifications} />
      )}
    </ScrollView>
  );
}
```

### CartScreen Example
```javascript
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '@/services/mobileApi';

export default function CartScreen() {
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.auth.user);
  const [loading, setLoading] = React.useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      for (const item of cart.items) {
        await createOrder({
          product_id: item.id,
          quantity: item.quantity,
          payment_method: cart.paymentMethod,
          shipping_name: user.user_metadata?.fullName || '',
          shipping_phone: user.user_metadata?.phone || '',
          shipping_address: cart.shippingAddress,
          shipping_city: cart.shippingCity,
        });
      }
      // Clear cart after successful checkout
      dispatch(clearCart());
      // Navigate to success screen
    } catch (error) {
      console.error('Checkout error:', error);
      // Show error message
    } finally {
      setLoading(false);
    }
  };

  return (
    // Your checkout UI
  );
}
```

## 🛠️ File Structure

```
/waresouqapp01
├── config/
│   └── supabase.js          # Supabase client initialization
├── services/
│   └── mobileApi.js         # API integration layer
├── slices/
│   ├── authSlice.js         # Updated auth slice
│   ├── cartSlice.js
│   ├── productsSlice.js
│   └── wishlistSlice.js
├── screens/
│   ├── HomeScreen.js
│   ├── ProductScreen.js
│   ├── cart/
│   │   └── CartScreen.js
│   └── auth/
│       ├── login/
│       │   ├── SignInScreen.js
│       │   └── ConfirmScreen.js
│       └── register/
│           ├── SignUpScreen.js
│           ├── PasswordchangedScreen.js
│           └── ...
├── .env                     # Your local credentials
├── .env.example            # Template for credentials
├── .gitignore              # Git ignore rules
├── api.js                  # Deprecated (redirects to mobile-api)
├── store.js                # Redux store
└── package.json            # Updated with Supabase
```

## 🔐 Security Best Practices

1. **Never commit `.env` file** - Add it to `.gitignore` (already done)
2. **Use `.env.example`** - Share this template with team members
3. **Store tokens safely** - AsyncStorage is used with Supabase's auto-refresh
4. **Environment variables** - All sensitive data should be in `.env`
5. **Row Level Security (RLS)** - Configure in Supabase dashboard for data protection

## 🐛 Troubleshooting

### Authentication Issues
- Verify Supabase credentials in `.env`
- Check user exists in Supabase Auth
- Ensure AsyncStorage is working properly

### API Errors
- Check network connectivity
- Verify API URL in `.env` is correct
- Check Supabase function logs in dashboard
- Ensure user has valid session token

### CORS Issues
- Supabase Edge Functions handle CORS automatically
- If issues persist, check function headers

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## 💡 Next Steps

1. ✅ Set Supabase credentials in `.env`
2. ✅ Run `npm install`
3. ✅ Test authentication flow with SignUpScreen
4. ✅ Test product fetching with HomeScreen
5. ✅ Test order creation with CartScreen
6. ✅ Deploy to production

## Support

For issues or questions:
1. Check Supabase logs in dashboard
2. Check app console for error messages
3. Review network requests in debugger
4. Check authentication state in Redux DevTools

---

**Last Updated:** March 7, 2026
**Integration Version:** 1.0.0
