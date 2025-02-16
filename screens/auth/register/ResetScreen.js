import { View, Text,Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../../assets/images/logo.png"

export default function ConfirmScreen({navigation}) {
  return (
    <View className="bg-white flex-1">
      <SafeAreaView className="flex-1 px-4">
        <View className="flex-row justify-center mt-10">
            <Image source={logo} className="w-[140px] h-[40px]"  />
        </View>
        <View className="mt-20">
          <View>
            <Text className="text-center font-bold text-lg">Reset password</Text>
          </View>
          <View className="mt-10">
            <Text className="font-base text-[12px] text-[#CDCDCD]">
                Please provide the email address or phone number associated with your account. We will send an otp shortly.
            </Text>
            <View className="mt-7 flex-row space-x-3">
              <TextInput className="w-full px-4 py-2    border border-[#E5E5E5] rounded-xl bg-white" placeholder='Email/phone number' />
            </View>
            <View className="mt-5">
              <TouchableOpacity className="bg-[#E52F20] rounded-[10px] py-2 mt-3" onPress={()=>navigation.navigate("resetPasswordOtp")} >
                <Text className="text-center text-white font-bold ">Continue</Text>
              </TouchableOpacity> 
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}