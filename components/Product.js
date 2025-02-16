import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import phone from "./../assets/images/iphone.png"

const Product = ({navigation}) => {
  return (
    <View className="my-1">
        <TouchableOpacity onPress={()=>navigation.navigate("product")}>
            <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[160px]">
            <View >
                <Image source={phone} className="h-[155px] w-[100%]" />
            </View>
            <View className="px-2 py-2">
                <Text className="text-[12px] text-[#1A1A1A] font-bold">Samsung Galaxy S21+ 5G S21 Plus G996U1 256GB </Text>
                <View className="py-2 flex-row">
                    <Ionicons name='star' size={17} color='#FDC040' />
                    <Ionicons name='star' size={17} color='#FDC040' />
                    <Ionicons name='star' size={17} color='#FDC040' />
                    <Ionicons name='star' size={17} color='#FDC040' />
                    <Ionicons name='star' size={17} color='#CDCDCD' />
                </View>
                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center gap-1">
                        <Text className="text-[12px] text-[#E52F20] font-bold">$700.51</Text>
                        <Text className="text-[9px] text-[#CDCDCD] font-bold">$760.80</Text>
                    </View>
                    <View className="">
                        <Text className="text-[12px] bg-[#E52F20] text-white font-bold px-1 rounded-[2px]">15% Off</Text>

                    </View>
                </View>
            </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Product