import { View, Text,TouchableOpacity,ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import img from "./../../assets/images/laptop.png";

const OrdersScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style='dark'/>
      <TouchableOpacity className="p-3 absolute z-40 top-8 left-0" onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-outline' size={25} color="#b7b6b6" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 mt-16 space-y-4">
        
        <View className="border border-[#cccccc] rounded-lg  p-4">
          <View className="border-b border-[#cccccc]  pb-4 flex-row justify-between">
            <Text className="font-bold ">Orders List</Text>
            
          </View>
          <View className="orders flex-col mt-5 space-y-4">
            <View className="order space-y-4">
              <View className="flex-row  space-x-3">
                <View>
                  <Image source={img} className="w-[85px] h-12"/>
                </View>
                <View className="space-y-2">
                  <Text className="font-bold text-[16px]">Decorative stickers</Text>
                  <Text className="font-semibold">$10.71</Text>
                </View>
              </View>
              <View className="flex-row space-x-2">
                <TouchableOpacity className="w-[50%]  py-2 border border-[#e52f20] rounded-md">
                  <Text className="text-[#e52f20] font-bold   text-center text-[13px]">Track order</Text>
                </TouchableOpacity>
                <TouchableOpacity className="w-[50%]  py-2 bg-[#e53020] rounded-md">
                  <Text className="text-white  font-bold text-center text-[13px]">Confirm delivery</Text>
                </TouchableOpacity>
              </View>
            </View>
            
          </View>
          
        </View>
        
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default OrdersScreen