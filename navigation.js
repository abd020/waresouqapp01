import React from 'react';
import { View,Text,TouchableOpacity } from "react-native"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import NotificationScreen from './screens/NotificationScreen';
import SignUpScreen from './screens/auth/register/SignUpScreen';
import ConfirmScreen from './screens/auth/login/ConfirmScreen';
import ResetScreen from './screens/auth/register/ResetScreen';
import ResetPassOtpScreen from './screens/auth/register/ResetPassOtpScreen';
import NewPassScreen from './screens/auth/register/NewPassScreen';
import PasswordchangedScreen from './screens/auth/register/PasswordchangedScreen';
import ProfileScreen from './screens/user/ProfileScreen';
import SignInScreen from './screens/auth/login/SignInScreen';
import ProductScreen from './screens/ProductScreen';
import AccountScreen from './screens/user/AccountScreen';
import OrdersScreen from './screens/user/OrdersScreen';
import FaqScreen from './screens/user/FaqScreen';
import Whishlist from './screens/whishlist/Whishlist';
import CartScreen from './screens/cart/CartScreen';
import CategoriesScreen from './screens/categorie/CategoriesScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import { useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




function MainTabs() {
  return (
    <Tab.Navigator screenOptions={({route})=>({
       headerShown: false ,
       tabBarShowLabel: false,
       tabBarIcon: ({focused,color,size})=>{
        let iconName;
        if (route.name == "home"){
          iconName = focused ? 'home' : 'home-outline';
        }
        else if(route.name == "whishlist"){
          iconName = focused ? 'heart' : 'heart-outline';
        }
        else if(route.name == "notifications"){
          iconName = focused ? 'notifications' : 'notifications-outline';
        }
        else if(route.name == "cart"){
          iconName = focused ? 'cart' : 'cart-outline';
        }
        else if(route.name == "categories"){
          iconName = focused ? 'apps' : 'apps-outline';
        }
        return <Ionicons name={iconName} size={27} color="#E52F20" />
       }
    })} initialRouteName="home">
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="whishlist" component={Whishlist} />
      <Tab.Screen name="notifications" component={NotificationScreen} />
      <Tab.Screen name="cart" component={CartScreen} />
      <Tab.Screen name="categories" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}



const Navigation = () => {
  const user = useSelector(state=>state.auth.user)
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}initialRouteName={user ? "mainTab" : "mainTab"}>
      {true ? (
          <>
            <Stack.Screen name="mainTab" component={MainTabs} />
            <Stack.Screen name="product" component={ProductScreen} />
            <Stack.Screen name="profile" component={ProfileScreen} />
            <Stack.Screen name="account" component={AccountScreen} />
            <Stack.Screen name="orders" component={OrdersScreen} />
            <Stack.Screen name="faq" component={FaqScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="onboarding" component={OnboardingScreen} />
            <Stack.Screen name="signUp" component={SignUpScreen} />
            <Stack.Screen name="confirm" component={ConfirmScreen} />
            <Stack.Screen name="signIn" component={SignInScreen} />
            <Stack.Screen name="resetPassword" component={ResetScreen} />
            <Stack.Screen name="resetPasswordOtp" component={ResetPassOtpScreen} />
            <Stack.Screen name="NewPassword" component={NewPassScreen} />
            <Stack.Screen name="passwordChanged" component={PasswordchangedScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
