import { View, Text,Image, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../../../assets/images/logo.png"

export default function ConfirmScreen() {
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
            Please type the OTP you received via email in the field below.
            </Text>
            <View className="mt-7 flex-row space-x-3">
              <TextInput maxLength={1} keyboardType="numeric" className="w-11 h-11 p-2 text-center text-lg font-bold text-[#E52F20] border border-[#E5E5E5] rounded-xl bg-white" />
              <TextInput maxLength={1} keyboardType="numeric" className="w-11 h-11 p-2 text-center text-lg font-bold text-[#E52F20] border border-[#E5E5E5] rounded-xl bg-white" />
              <TextInput maxLength={1} keyboardType="numeric" className="w-11 h-11 p-2 text-center text-lg font-bold text-[#E52F20] border border-[#E5E5E5] rounded-xl bg-white" />
              <TextInput maxLength={1} keyboardType="numeric" className="w-11 h-11 p-2 text-center text-lg font-bold text-[#E52F20] border border-[#E5E5E5] rounded-xl bg-white" />
              <TextInput maxLength={1} keyboardType="numeric" className="w-11 h-11 p-2 text-center text-lg font-bold text-[#E52F20] border border-[#E5E5E5] rounded-xl bg-white" />
              <TextInput maxLength={1} keyboardType="numeric" className="w-11 h-11 p-2 text-center text-lg font-bold text-[#E52F20] border border-[#E5E5E5] rounded-xl bg-white" />
            </View>
            <View className="mt-5">
              <TouchableOpacity className="bg-[#E52F20] rounded-[10px] py-2 mt-3" >
                <Text className="text-center text-white font-bold">Continue</Text>
              </TouchableOpacity> 
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  )
}