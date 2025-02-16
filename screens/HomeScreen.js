import { View, Text,Image,TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import avatar from "../assets/images/avatar.png"
import phone from "../assets/images/iphone.png"
import pods from "../assets/images/air pods.jpeg"
import lap from "../assets/images/laptop.png"

import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'



const HomeScreen = () => {
    const navigation = useNavigation()
  return (
    <SafeAreaView className='bg-white ' >
        <StatusBar barStyle="light-content"/>
        <View className="flex-row  space-x-2 px-4 py-4 items-center">
           <View className="flex-row items-center justify-between flex-1 ">
             
             <TouchableOpacity onPress={()=>navigation.navigate("profile")}>
                <Image source={avatar} style={{ width: 40, height: 40 }} className="rounded-full" />
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate("mainTab",{screen:"notifications"})}>
                <Ionicons name='notifications-outline' size={22} color='black' />
             </TouchableOpacity>
           </View>
        </View>
        
        <ScrollView showsVerticalScrollIndicator={false} className="mb-[70px]">
            <View className="px-4 py-4">
                <Text className='text-[14px] '>Hello Ahmed</Text>
                <Text className="font-bold text-[14px] ">Let’s Start Shopping !</Text>         
            </View>
            <View className="px-4 py-2">
                <View className=" border-[2px] rounded-lg border-[#e52f20] flex-row justify-between items-center  h-[40px]">
                    <TextInput
                        placeholder="search"
                        className="p-2 w-[90%]"
                    />
                    <View className='bg-[#e52f20] h-full flex justify-center items-center w-[10%] '>
                        <Ionicons name='search-outline' size={22} color='white' style={{fontWeight:"bold"}} />
                    </View>
                </View>
            </View>
            

            <View className="px-4 py-2">
                <View className="pb-3">
                    <Text className="text-[18px] text-[#1a1a1ac5] font-bold">Categories</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex gap-2  " >
                    
                    <View className="bg-red-500 px-4 py-2 rounded-[15px]">
                        <Text className="text-white text-[12px] font-bold">All</Text>
                    </View>
                    <View className=" px-4 py-2 rounded-[15px] border border-[#00000020]" >
                        <Text className="text-[12px] font-semibold">Women’s Fashion</Text>
                    </View>
                    <View className=" px-4 py-2 rounded-[15px] border border-[#00000020]" >
                        <Text className="text-[12px] font-semibold">Men’s Fashion</Text>
                    </View>
                    <View className=" px-4 py-2 rounded-[15px] border border-[#00000020]" >
                        <Text className="text-[12px] font-semibold">Electronics</Text>
                    </View>
                    <View className=" px-4 py-2 rounded-[15px] border border-[#00000020]" >
                        <Text className="text-[12px] font-semibold">Cosmetics</Text>
                    </View>
                    <View className=" px-4 py-2 rounded-[15px] border border-[#00000020]" >
                        <Text className="text-[12px] font-semibold">Men’s Fashion</Text>
                    </View>
                    <View className=" px-4 py-2 rounded-[15px] border border-[#00000020]" >
                        <Text className="text-[12px] font-semibold">Men’s Fashion</Text>
                    </View>
                    <View className=" px-4 py-2 rounded-[15px] border border-[#00000020]" >
                        <Text className="text-[12px] font-semibold">Men’s Fashion</Text>
                    </View>
                </ScrollView>
            </View>
            <View className="px-4 py-2">
                <View className="pb-3">
                    <Text className="text-[18px] text-[#1a1a1ac5] font-bold">Featured Products</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex gap-2  " >
                    
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    <TouchableOpacity onPress={()=>navigation.navigate("product")}>
                        <View className="border border-[#cdcdcda8]  rounded-[4px] h-[260px] w-[200px]">
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
                    
                </ScrollView>
            </View>
            <View className="px-4 py-2">
                <View>
                    <View className="bg-[#CBF0FD] rounded-[8px] flex-row items-center gap-2 p-2">
                        <View className="flex-1 ">
                            <Text className="text-[14px] font-bold">AZUS Zenbook 14 Best buy</Text>
                            <Text className="bg-[#6B75FF] w-[80px] text-center font-bold text-white rounded-[24px] mt-2 px-1 py-2">Visit shop</Text>
                        </View>
                        <View className="flex-2 ">
                            <Image source={lap} className="w-[178px] h-[127px]" />
                        </View>
                    </View>
                </View>
            </View>
            
            {/* <View className="px-4  ">
                <View className="flex-row gap-3 items-center justify-center">
                    <View className="px-2">
                        <Ionicons name='home' size={27} color='#E52F20'  />
                    </View>
                    <View className="px-2">
                        <Ionicons name='cube-outline' size={27} color='#1A1A1A'  />
                    </View>
                    <View className="px-2">
                        <Ionicons name='heart-outline' size={27} color='#1A1A1A'  />
                    </View>
                    <View className="px-2">
                        <Ionicons name='cart-outline' size={27} color='#1A1A1A'  />
                    </View>
                    <View className="px-2">
                        <Ionicons name='person-outline' size={27} color='#1A1A1A'  />
                    </View>
                    
                </View>
            </View> */}
            
            
        </ScrollView>
        
    </SafeAreaView>
  )
}


export default HomeScreen