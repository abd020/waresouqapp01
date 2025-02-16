import { View, Text,Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../../assets/images/logo.png"

export default function NewPassScreen({navigation}) {
  return (
    <View className="bg-white flex-1">
      <SafeAreaView className="flex-1 px-4">
        <View className="flex-row justify-center mt-10">
            <Image source={logo} className="w-[140px] h-[40px]"  />
        </View>
        <View className="mt-20">
          <View>
            <Text className="text-center font-bold text-lg">New password</Text>
          </View>
          <View className="mt-10">
            <Text className="font-base text-[12px] mb-7 text-[#CDCDCD]">
            Choose a strong and unique password for your account. Make sure it includes a mix of letters, numbers, and special characters
            </Text>
            <View className=" flex-col gap-2">
              <TextInput className="w-full px-4 py-2    border border-[#E5E5E5] rounded-xl bg-white" placeholder='Password' />
              <TextInput className="w-full px-4 py-2    border border-[#E5E5E5] rounded-xl bg-white" placeholder='Confirm password' />
            </View>
            <View className="mt-5">
              <TouchableOpacity className="bg-[#E52F20] rounded-[10px] py-2 mt-3" onPress={()=>navigation.navigate("passwordChanged")}>
                <Text className="text-center text-white font-bold ">Continue</Text>
              </TouchableOpacity> 
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}