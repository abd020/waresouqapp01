import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';


const NotificationScreen = ({navigation}) => {
  return (
    <View className=" bg-white flex-1 ">
      <SafeAreaView className="flex-1 px-4">
        <StatusBar barStyle="dark-content"  />
        <View className="">
          <View className="relative pt-4 pb-2">
            <View className="absolute z-20 left-0 top-4">
              <TouchableOpacity  onPress={()=>navigation.goBack()}>
                <Ionicons name='chevron-back-outline'  size={25} color="#161515" />
              </TouchableOpacity>
            </View>
            <Text className="text-center text-[#161515]  font-bold text-lg">Notification</Text>
          </View>
        </View>
        <ScrollView className="flex-1"  showsVerticalScrollIndicator={false}>
          <View>
            <Text className="font-bold text-[#161515] text-base">Today</Text>
            <View className=" mt-4 px-3 py-2 space-y-2">
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is on it’s way</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is at your doorstep</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is at your doorstep</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is on it’s way</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is at your doorstep</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is on it’s way</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              
            </View>
          </View>
          <View>
            <Text className="font-bold text-[#161515] text-base">Yesterday</Text>
            <View className=" mt-4 px-3 py-2 space-y-2">
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is on it’s way</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is on it’s way</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is at your doorstep</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is on it’s way</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is at your doorstep</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              <View className="gap-2 flex-row">
                <View className="p-2 rounded-md bg-[#e5302017]">
                  <Ionicons name='notifications'  size={30} color="#E52F20" />
                </View>
                <View>
                  <Text className="font-semibold text-base">Your Product is on it’s way</Text>
                  <Text className="text-[#1615154e]">08:58 PM</Text>
                </View>
              </View>
              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default NotificationScreen