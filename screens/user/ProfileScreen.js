import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import profile from "../../assets/profile.png"


export default function ProfileScreen({navigation}) {
  return (
    <View className="bg-[#E52F20] flex-1">
        <StatusBar style='light'/>
        <TouchableOpacity className="p-3 absolute z-40 top-10 left-2" onPress={() => navigation.goBack()}>
                <Ionicons name='chevron-back-outline' size={25} color="white" />
        </TouchableOpacity>
        <SafeAreaView className="flex-1 ">
            
            <View className="px-4 flex items-center space-y-4 mt-10">
                <View>
                    <Image source={profile} className="rounded-full h-[120px] w-[120px]" />
                </View>
                <View>
                    <Text className="text-white font-semibold text-lg text-center">Ahmed Benareb </Text>
                    <Text className="text-white font-semibold text-sm text-center mt-3">
                        0542671829    Ahmed@gmail.com    
                    </Text>
                </View>
            </View>
            <View className="bg-white rounded-tl-3xl rounded-tr-3xl px-4 py-3 mt-7 flex-1">
                <View className="p-3">
                    <TouchableOpacity onPress={()=>navigation.navigate("account")} className="flex-row items-center justify-between py-3 border-b border-[#E0E0E0]">
                        <View className="flex-row space-x-3">
                            <Ionicons name='person-outline' size={20} color="black" />
                            <Text className="text-[#161515] text-base ">My Account</Text>
                        </View>
                        <View>
                            <Ionicons name='chevron-forward-outline' size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("orders")} className="flex-row items-center justify-between py-3 border-b border-[#E0E0E0]">
                        <View className="flex-row space-x-3">
                            <Ionicons name='lock-closed-outline' size={20} color="black" />
                            <Text className="text-[#161515] text-base ">My Orders</Text>
                        </View>
                        <View>
                            <Ionicons name='chevron-forward-outline' size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("faq")} className="flex-row items-center justify-between py-3 border-b border-[#E0E0E0]">
                        <View className="flex-row space-x-3">
                            <Ionicons name='information-circle-outline' size={20} color="black" />
                            <Text className="text-[#161515] text-base ">FAQ</Text>
                        </View>
                        <View>
                            <Ionicons name='chevron-forward-outline' size={20} color="black" />
                        </View>
                    </TouchableOpacity>
                    <View className="flex-row items-center justify-between py-3 ">
                        <View className="flex-row space-x-3">
                            <Ionicons name='log-out-outline' size={20} color="#E52F20" />
                            <Text className="text-[#E52F20] text-base ">Sign out</Text>
                        </View>
                        
                    </View>
                </View>
            </View>
        </SafeAreaView>  
    </View>
  )
}