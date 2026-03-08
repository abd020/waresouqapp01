# Screen Integration Examples

This file provides ready-to-use code snippets for each screen in your app.

## 📱 Authentication Screens

### SignUpScreen.js
```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../slices/authSlice';

export default function SignUpScreen({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
    confirmPassword: ''
  });

  const handleSignUp = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const result = await dispatch(registerUser({
      email: formData.email,
      password: formData.password,
      fullName: formData.fullName,
      phone: formData.phone,
    }));

    if (registerUser.fulfilled.match(result)) {
      // Navigate to confirmation or login screen
      navigation.navigate('ConfirmScreen');
    }
  };

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-2xl font-bold mb-5">Create Account</Text>
      
      <TextInput
        placeholder="Full Name"
        value={formData.fullName}
        onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />

      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />

      <TextInput
        placeholder="Phone"
        value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />

      <TextInput
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
        className="border border-gray-300 rounded px-3 py-2 mb-3"
      />

      <TextInput
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
        secureTextEntry
        className="border border-gray-300 rounded px-3 py-2 mb-5"
      />

      {error && <Text className="text-red-500 mb-3">{error}</Text>}

      <TouchableOpacity
        onPress={handleSignUp}
        disabled={loading}
        className="bg-blue-500 py-3 rounded mb-3"
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white text-center font-bold">Sign Up</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
        <Text className="text-center text-blue-500">Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
```

### SignInScreen.js
```javascript
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../slices/authSlice';

export default function SignInScreen({ navigation }) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.auth);
  
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async () => {
    const result = await dispatch(loginUser(credentials));

    if (loginUser.fulfilled.match(result)) {
      // Navigate to home
      navigation.replace('MainTabs', { screen: 'home' });
    }
  };

  return (
    <View className="flex-1 bg-white p-5 justify-center">
      <Text className="text-3xl font-bold mb-8 text-center">Welcome Back</Text>
      
      <TextInput
        placeholder="Email"
        value={credentials.email}
        onChangeText={(text) => setCredentials({ ...credentials, email: text })}
        keyboardType="email-address"
        editable={!loading}
        className="border border-gray-300 rounded px-3 py-3 mb-4"
      />

      <TextInput
        placeholder="Password"
        value={credentials.password}
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
        secureTextEntry
        editable={!loading}
        className="border border-gray-300 rounded px-3 py-3 mb-5"
      />

      {error && <Text className="text-red-500 mb-3">{error}</Text>}

      <TouchableOpacity
        onPress={handleLogin}
        disabled={loading}
        className="bg-blue-500 py-3 rounded mb-3"
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white text-center font-bold text-lg">Sign In</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ResetScreen')}>
        <Text className="text-center text-gray-600 mb-5">Forgot Password?</Text>
      </TouchableOpacity>

      <View className="flex-row justify-center">
        <Text className="text-gray-600">Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text className="text-blue-500 font-bold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
```

## 🏠 HomeScreen.js
```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, FlatList, Image, TouchableOpacity } from 'react-native';
import { fetchHome } from '../services/mobileApi';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../slices/authSlice';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        setLoading(true);
        const data = await fetchHome(12, 12);
        setHomeData(data);
        setError(null);
      } catch (err) {
        console.error('Error loading home:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();
  }, []);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#0066cc" />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold">WareSouq</Text>
        {user && <Text className="text-gray-600">Welcome, {user.email}</Text>}
        {homeData?.unreadNotifications > 0 && (
          <View className="mt-2 bg-red-100 p-2 rounded">
            <Text className="text-red-700">
              You have {homeData.unreadNotifications} new notification(s)
            </Text>
          </View>
        )}
      </View>

      {/* Categories */}
      {homeData?.categories && (
        <View className="p-4">
          <Text className="text-lg font-bold mb-3">Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {homeData.categories.map(category => (
              <TouchableOpacity
                key={category.id}
                className="mr-3 bg-gray-100 p-3 rounded-lg items-center"
                onPress={() => navigation.navigate('CategoriesScreen', { categoryId: category.id })}
              >
                <Text className="text-2xl mb-1">{category.icon || '📦'}</Text>
                <Text className="text-xs font-semibold">{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* Latest Products */}
      {homeData?.products && (
        <View className="p-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-bold">Latest Products</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
              <Text className="text-blue-500">View All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            scrollEnabled={false}
            data={homeData.products}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="bg-gray-50 rounded-lg p-3 mb-3 w-1/2"
                onPress={() => navigation.navigate('ProductScreen', { productId: item.id })}
              >
                <Image
                  source={{ uri: item.image_url }}
                  className="w-full h-40 rounded mb-2 bg-gray-200"
                />
                <Text className="font-semibold text-sm" numberOfLines={2}>{item.name}</Text>
                <Text className="text-blue-600 font-bold">${item.price}</Text>
                <Text className="text-gray-500 text-xs">Stock: {item.stock || 'N/A'}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {error && (
        <View className="p-4 bg-red-100">
          <Text className="text-red-700">Error: {error}</Text>
        </View>
      )}
    </ScrollView>
  );
}
```

## 🛒 CartScreen.js
```javascript
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { createOrder } from '../services/mobileApi';
import { clearCart } from '../slices/cartSlice';

export default function CartScreen({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const cart = useSelector(state => state.cart);
  const [loading, setLoading] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    name: user?.user_metadata?.fullName || '',
    phone: user?.user_metadata?.phone || '',
    address: '',
    city: '',
    paymentMethod: 'cod'
  });

  const calculateTotal = () => {
    return cart.items?.reduce((total, item) => total + (item.price * item.quantity), 0) || 0;
  };

  const handleCheckout = async () => {
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address || !shippingInfo.city) {
      alert('Please fill in all shipping details');
      return;
    }

    setLoading(true);
    try {
      // Create orders for each item in cart
      for (const item of cart.items) {
        await createOrder({
          product_id: item.id,
          quantity: item.quantity,
          payment_method: shippingInfo.paymentMethod,
          shipping_name: shippingInfo.name,
          shipping_phone: shippingInfo.phone,
          shipping_address: shippingInfo.address,
          shipping_city: shippingInfo.city,
        });
      }

      // Clear cart after successful checkout
      dispatch(clearCart());
      alert('Order placed successfully!');
      navigation.navigate('OrdersScreen');
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to place order: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!cart.items || cart.items.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-xl font-bold mb-4">Your cart is empty</Text>
        <TouchableOpacity
          className="bg-blue-500 px-8 py-3 rounded"
          onPress={() => navigation.navigate('ProductScreen')}
        >
          <Text className="text-white font-bold">Continue Shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      {/* Cart Items */}
      <FlatList
        data={cart.items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="p-4 border-b border-gray-200 flex-row">
            <View className="flex-1">
              <Text className="font-bold">{item.name}</Text>
              <Text className="text-gray-600">Qty: {item.quantity}</Text>
              <Text className="text-blue-600 font-bold">${item.price}</Text>
            </View>
            <Text className="font-bold">${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        )}
        ListFooterComponent={
          <View className="p-4">
            <View className="border-t border-gray-200 pt-4 mb-4">
              <View className="flex-row justify-between mb-2">
                <Text className="font-bold">Subtotal:</Text>
                <Text>${calculateTotal().toFixed(2)}</Text>
              </View>
              <View className="flex-row justify-between mb-4">
                <Text className="text-lg font-bold">Total:</Text>
                <Text className="text-lg font-bold text-blue-600">${calculateTotal().toFixed(2)}</Text>
              </View>
            </View>

            {/* Shipping Details */}
            <Text className="text-lg font-bold mb-3">Shipping Details</Text>
            
            <TextInput
              placeholder="Full Name"
              value={shippingInfo.name}
              onChangeText={(text) => setShippingInfo({ ...shippingInfo, name: text })}
              className="border border-gray-300 rounded px-3 py-2 mb-2"
              editable={!loading}
            />

            <TextInput
              placeholder="Phone"
              value={shippingInfo.phone}
              onChangeText={(text) => setShippingInfo({ ...shippingInfo, phone: text })}
              className="border border-gray-300 rounded px-3 py-2 mb-2"
              editable={!loading}
            />

            <TextInput
              placeholder="Address"
              value={shippingInfo.address}
              onChangeText={(text) => setShippingInfo({ ...shippingInfo, address: text })}
              className="border border-gray-300 rounded px-3 py-2 mb-2"
              editable={!loading}
            />

            <TextInput
              placeholder="City"
              value={shippingInfo.city}
              onChangeText={(text) => setShippingInfo({ ...shippingInfo, city: text })}
              className="border border-gray-300 rounded px-3 py-2 mb-4"
              editable={!loading}
            />

            <TouchableOpacity
              onPress={handleCheckout}
              disabled={loading}
              className="bg-green-500 py-3 rounded"
            >
              {loading ? (
                <ActivityIndicator color="white" />
              ) : (
                <Text className="text-white text-center font-bold text-lg">Place Order</Text>
              )}
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}
```

## 📋 OrdersScreen.js
```javascript
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { fetchOrders } from '../services/mobileApi';

export default function OrdersScreen() {
  const user = useSelector(state => state.auth.user);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState('buyer');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    loadOrders();
  }, [role, status]);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const data = await fetchOrders(role, status, 20, 0);
      setOrders(data.orders);
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100';
      case 'completed': return 'bg-green-100';
      case 'cancelled': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Role Toggle */}
      <View className="flex-row p-4 border-b border-gray-200">
        <TouchableOpacity
          onPress={() => setRole('buyer')}
          className={`flex-1 py-2 px-3 mr-2 rounded ${role === 'buyer' ? 'bg-blue-500' : 'bg-gray-200'}`}
        >
          <Text className={`text-center font-bold ${role === 'buyer' ? 'text-white' : 'text-gray-700'}`}>
            Purchases
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setRole('seller')}
          className={`flex-1 py-2 px-3 rounded ${role === 'seller' ? 'bg-blue-500' : 'bg-gray-200'}`}
        >
          <Text className={`text-center font-bold ${role === 'seller' ? 'text-white' : 'text-gray-700'}`}>
            Sales
          </Text>
        </TouchableOpacity>
      </View>

      {/* Status Filter */}
      <ScrollView horizontal className="p-4 border-b border-gray-200">
        {['all', 'pending', 'completed', 'cancelled'].map(s => (
          <TouchableOpacity
            key={s}
            onPress={() => setStatus(s === 'all' ? null : s)}
            className={`mr-2 px-3 py-1 rounded-full ${status === (s === 'all' ? null : s) ? 'bg-blue-500' : 'bg-gray-200'}`}
          >
            <Text className={status === (s === 'all' ? null : s) ? 'text-white' : 'text-gray-700'}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Orders List */}
      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#0066cc" />
        </View>
      ) : orders.length === 0 ? (
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-600">No orders found</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View className="p-4 border-b border-gray-200">
              <View className="flex-row justify-between items-start mb-2">
                <Text className="font-bold">Order #{item.id.slice(0, 8)}</Text>
                <View className={`px-3 py-1 rounded ${getStatusColor(item.status)}`}>
                  <Text className="text-xs font-bold capitalize">{item.status}</Text>
                </View>
              </View>
              
              <Text className="text-gray-600 text-sm mb-2">
                {item.products?.name} x {item.quantity}
              </Text>
              
              <View className="flex-row justify-between items-center">
                <Text className="text-blue-600 font-bold">${item.total_price}</Text>
                <Text className="text-gray-500 text-xs">
                  {new Date(item.created_at).toLocaleDateString()}
                </Text>
              </View>

              {item.tracking_number && (
                <Text className="text-gray-600 text-xs mt-2">
                  Tracking: {item.tracking_number}
                </Text>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
}
```

## 📝 NotificationScreen.js
```javascript
import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { markNotificationsAsRead } from '../services/mobileApi';

export default function NotificationScreen() {
  const [notifications, setNotifications] = React.useState([]);

  const handleMarkAsRead = async (notificationIds) => {
    try {
      await markNotificationsAsRead(notificationIds);
      // Remove from list or update status
      setNotifications(prev => 
        prev.filter(n => !notificationIds.includes(n.id))
      );
    } catch (error) {
      console.error('Error marking as read:', error);
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="p-4 border-b border-gray-200">
        <Text className="text-2xl font-bold">Notifications</Text>
      </View>

      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="p-4 border-b border-gray-200 bg-blue-50">
            <Text className="font-bold mb-1">{item.title}</Text>
            <Text className="text-gray-600 mb-2">{item.message}</Text>
            <TouchableOpacity
              onPress={() => handleMarkAsRead([item.id])}
              className="mt-2"
            >
              <Text className="text-blue-500 font-semibold">Mark as Read</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center p-4">
            <Text className="text-gray-500">No notifications</Text>
          </View>
        }
      />
    </View>
  );
}
```

## 🔧 Integration Tips

1. **Import statements**: Update all imports to use the new services
2. **Error handling**: Always wrap API calls in try-catch
3. **Loading states**: Show loaders while fetching data
4. **Redux state**: Check auth state before protected operations
5. **Navigation**: Use proper navigation patterns from your router
6. **Testing**: Test each screen with mock and real data

## 📌 Common Patterns

```javascript
// Pattern 1: Fetch data on screen mount
useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);
      const data = await fetchHome();
      setData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  loadData();
}, []);

// Pattern 2: Redux dispatch with async thunk
const result = await dispatch(loginUser(credentials));
if (loginUser.fulfilled.match(result)) {
  // Success
} else {
  // Error
}

// Pattern 3: Conditional rendering
{loading ? <Spinner /> : data ? <Content /> : <Empty />}
```

---

Use these examples as templates for your own screens!
