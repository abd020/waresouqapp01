import { View, Text, TouchableOpacity,TextInput, ScrollView ,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import masterCard from "./../../assets/images/mastercard.jpg"


const AccountScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style='dark'/>
      <TouchableOpacity className="p-3 absolute z-40 top-8 left-0" onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-outline' size={25} color="#b7b6b6" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 mt-16 space-y-4">
        <View className="border border-[#cccccc] rounded-lg  p-4">
          <Text className="font-bold border-b border-[#cccccc]  pb-4">Profile Settings</Text>
          <View className="form flex-col mt-10 space-y-4">
            <View>
                <TextInput className="w-full border border-[#cccccc] rounded-[10px] px-2 py-1" placeholder='NewUser' />
            </View>
            <View>
                <TextInput className="w-full border border-[#cccccc] rounded-[10px] px-2 py-1" placeholder='NewUser@gmail.com' />
            </View>
            <View>
                <TextInput className="w-full border border-[#cccccc] rounded-[10px] px-2 py-1" placeholder='Phone Number' />
            </View>
            <View>
                <TextInput className="w-full border border-[#cccccc] rounded-[10px] px-2 py-1" value='1212121212' secureTextEntry placeholder='Password' />
            </View>
          </View>
        </View>
        <View className="border border-[#cccccc] rounded-lg  p-4">
          <View className="border-b border-[#cccccc]  pb-4 flex-row justify-between">
            <Text className="font-bold ">Payments</Text>
            <TouchableOpacity>
              <Ionicons name='pencil' size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View className="cards flex-col mt-5 space-y-4">
            <View className="space-x-3 flex-row">
              <Image source={masterCard} className="w-10 h-5" />
              <Text>7564 38## #### ##92</Text>
            </View>
            
          </View>
          <TouchableOpacity className="mt-4">
            <Text className="text-[#e52f20]">Add new card</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-end">
          <TouchableOpacity className="px-[30px] py-3 bg-[#e5302074] rounded-md">
            <Text className="text-white font-bold text-[15px]">Save</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountScreen
