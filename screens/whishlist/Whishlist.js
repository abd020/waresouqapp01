import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CheckBox } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../slices/cartSlice';
import {  removeFromWishlist } from '../../slices/wishlistSlice';
import img from '../../assets/images/iphone.png';

const Wishlist = ({ navigation }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist); 
  const [selectedProducts, setSelectedProducts] = useState([]);
  

  const handleSelectAll = () => {
    if (selectedProducts.length === wishlistItems.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(wishlistItems.map(product => product.id));
    }
  };

  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleDeleteSelected = () => {
    selectedProducts.forEach(productId => {
      dispatch(removeFromWishlist(productId)); 
    });
    setSelectedProducts([]);
  };

  const handleAddToCartSelected = () => {
    if (selectedProducts.length > 0) {
      selectedProducts.forEach(productId => {
        const product = wishlistItems.find(p => p.id === productId);
        dispatch(addToCart(product)); 
      });
      setSelectedProducts([]);
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch(removeFromWishlist(id)); 
    setSelectedProducts(selectedProducts.filter(productId => productId !== id));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <TouchableOpacity className="p-3 absolute z-40 top-8 left-0" onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back-outline" size={25} color="#b7b6b6" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 mt-16 space-y-4">
        <View className="border border-[#cccccc] rounded-lg p-4">
          <View className="border-b border-[#cccccc] pb-4">
            <Text className="font-bold">My Wishlist</Text>
            {wishlistItems.length !== 0 ? (
              <View className="flex-row items-center mt-3">
                <CheckBox
                  checked={selectedProducts.length === wishlistItems.length && wishlistItems.length !== 0}
                  onPress={handleSelectAll}
                  title="Select all items"
                  containerStyle={{ width: '100%', padding: '0px', marginTop: '0px', transform: [{ translateX: -17 }] }}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor="red"
                  textStyle={{ fontWeight: 500 }}
                />
              </View>
            ) : null}
          </View>
          <View className="products flex-col mt-5 space-y-4">
            {wishlistItems.length !== 0 ? wishlistItems.map(product => (
              <View key={product.id} className="flex-row items-center space-x-1">
                <CheckBox
                  checked={selectedProducts.includes(product.id)}
                  onPress={() => handleSelectProduct(product.id)}
                  containerStyle={{ padding: '0px', marginTop: '0px', width: '0%', transform: [{ translateX: -17 }] }}
                  iconType="material-community"
                  checkedIcon="checkbox-marked"
                  uncheckedIcon="checkbox-blank-outline"
                  checkedColor="red"
                  textStyle={{ fontWeight: 500 }}
                />
                <View className="flex-row space-x-2 flex-1">
                  <View className="bg-[#cccccc53] justify-center items-center border border-[#cccccc] rounded-lg">
                    <Image source={img} className="h-12 w-12 object-cover" />
                  </View>
                  <View className="flex-1 space-y-2">
                    <Text className="text-wrap text-[13px] font-bold">{product.name}</Text>
                    <Text className="text-wrap font-bold">{product.price}</Text>
                  </View>
                </View>
                <View className="flex-row space-x-1">
                  <TouchableOpacity onPress={() => handleDeleteProduct(product.id)}>
                    <Ionicons name="trash-outline" size={25} color="#e52f20" />
                  </TouchableOpacity>
                </View>
              </View>
            )) : <Text>Your Wishlist is empty</Text>}
          </View>
        </View>
        {wishlistItems.length !== 0 ? (
          <View className="flex-row justify-around space-x-4 mt-4">
            <TouchableOpacity
              className={`px-4 py-2 w-[50%] rounded-lg ${selectedProducts.length === 0 ? 'bg-gray-300' : 'bg-red-500'}`}
              onPress={handleDeleteSelected}
              disabled={selectedProducts.length === 0}
            >
              <Text className="text-white text-center">Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`px-4 py-2 w-[50%] rounded-lg ${selectedProducts.length === 0 ? 'bg-gray-300' : 'bg-red-500'}`}
              onPress={handleAddToCartSelected}
              disabled={selectedProducts.length === 0}
            >
              <Text className="text-white text-center font-bold">Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Wishlist;
