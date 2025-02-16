import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image ,TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from '@rneui/themed';
import img from '../../assets/images/iphone.png';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { updateProductQuantity,removeFromCart } from '../../slices/cartSlice';

const CartScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const products = useSelector(state=>state.cart)
  
  const [paymentMethod ,setPaymentMethod]=useState("cod")
  
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map(product => product.id));
    }
  };

  const handleSelectProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  


  const handleDeleteProduct = (id)=>{
    dispatch(removeFromCart(id))
  }
  const handleAddQte = (id) =>{
    const product = products.find(p=>p.id === id)
    if(product)(dispatch(updateProductQuantity({id,qte:product.qte +1 })))
    
  }
  const handleMinusQte = (id) =>{
    const product = products.find(p=>p.id === id)
    if(product && product.qte > 1){
      dispatch(updateProductQuantity({id,qte:product.qte - 1 }))
    }
  }
  return (
    <SafeAreaView className="flex-1 py-2 bg-white">
      <StatusBar style='dark'/>
      <TouchableOpacity className="p-3 absolute z-40 top-8 left-0" onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-outline' size={25} color="#b7b6b6" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 mt-16 space-y-4">
        
        <View className="border border-[#cccccc] rounded-lg  p-4">
          <View className="border-b border-[#cccccc] pb-4 ">
            <View className="pb-4 flex-row justify-between">
              <Text className="font-bold ">Delivery address</Text>
              <Ionicons name='pencil-outline' size={20} color="black" />
            </View>
            <View className="w-[90%] ">
              <Text>2972 Westheimer Rd. Santa Ana, Illinois 85486 </Text>
              <Text className="mt-4 text-[#E52F20]">Estimated delivery on Nov 13</Text>
            </View>
          </View>
          <View className="border-b border-[#cccccc] pb-4 mt-3">
            <View className="pb-4 flex-row justify-between">
              <Text className="font-bold ">Payment Methods</Text>
              <Ionicons name='pencil-outline' size={20} color="black" />
            </View>
            <View className="flex-row space-x-3">
              <View className="flex-1 flex-row items-center s">
                <RadioButton
                  value="cod"
                  color='#E52F20'
                  uncheckedColor='#E52F20'
                  status={ paymentMethod === 'cod' ? 'checked' : 'unchecked' }
                  onPress={() => setPaymentMethod('cod')}
                />
                <Text>Cash on delivery</Text>
              </View>
                <View className="flex-1 flex-row items-center ">
                  <RadioButton
                    value="cc"
                    color='#E52F20'
                    uncheckedColor='#E52F20'
                    status={ paymentMethod === 'cc' ? 'checked' : 'unchecked' }
                    onPress={() => setPaymentMethod('cc')}
                  />
                  <Text>Credit card</Text>
              </View>
            </View>
          </View>
          <View className=" mt-3">
            {products.length !== 0 ? <View className="flex-row items-center mt-3">
              <CheckBox
                checked={selectedProducts.length === products.length && products.length !== 0}
                onPress={handleSelectAll}
                title="Select all items"
                containerStyle={{ width: '100%', padding: '0px', marginTop: '0px', transform: [{ translateX: -17 }] }}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor="red"
                textStyle={{ fontWeight: 500 }}
              />
            </View> :null}
          </View>
          <View className="products flex-col  space-y-4  pb-4 ">
            {products.length !== 0 ? products.map(product => (
              <View key={product.id} className="flex-row items-center space-x-1 border-t border-[#cccccc] pt-4 mt-3">
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
                <View className="space-y-2">
                  <View className="flex-row space-x-2 justify-center">
                    <TouchableOpacity onPress={() => handleDeleteProduct(product.id)}>
                      <Ionicons name="trash-outline" size={23} color="#e52f20" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteProduct(product.id)}>
                      <Ionicons name="heart-outline" size={23} color="#e52f20" />
                    </TouchableOpacity>
                  </View>
                  <View className="flex-row space-x-2 items-center">
                    <TouchableOpacity className="border border-[#cccccc] rounded-sm p-[1px]" onPress={()=>handleMinusQte(product.id)} >
                      <Ionicons name='remove-outline' size={15} color="black" />
                    </TouchableOpacity>
                    <Text className="font-bold text-lg">{product.qte}</Text>
                    <TouchableOpacity className="border border-[#cccccc] rounded-sm p-[1px]">
                      <Ionicons name='add-outline' size={15} color="black" onPress={()=>handleAddQte(product.id)} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )) : <Text>Your Cart is empty</Text>}
          </View>
          
          
        </View>
        <View className="border border-[#cccccc] rounded-lg  p-4">
          <Text className="font-bold ">Summary</Text>
          <View className="mt-3 space-y-3">
            <View className="flex-row justify-between items-center">
              <Text>Item cost</Text>
              <Text className="font-bold text-md">$708 </Text>
            </View>
            <View className="flex-row justify-between items-center pb-4 border-b border-[#cccccc] ">
              <Text>Delivery cost</Text>
              <Text className="font-bold text-md">$10.20</Text>
            </View>
            <View className="flex-row justify-between items-center pb-4 border-b border-[#cccccc] ">
              <Text>Promo code</Text>
              <TextInput className=" border-[#E52F20] w-20 rounded-md border-2 px-1" />
            </View>
            <View className="flex-row justify-between items-center pb-4 ">
              <Text className="font-bold ">Total</Text>
              <Text className="font-bold text-[15px]">$710.20</Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              className={`px-4 py-2 w-[100%] rounded-lg  bg-red-500`}
              
            >
              <Text className="text-white text-center font-bold">Pay Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default CartScreen