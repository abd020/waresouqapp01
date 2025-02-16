import { View, Text, TouchableOpacity, ScrollView,Image } from 'react-native'
import { useState } from 'react';

import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import mobile from '../assets/images/iphone.png'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';



const ProductBottomTab = ({handleMinusQte,quantity,handleAddQte,navigation,handleAddToWishlist,order,dispatch}) => {
    const handleAddToCart = ()=>{
        dispatch(addToCart({...order,qte:quantity}))
    }
    
  return (
    <View className="flex-row justify-between items-center space-x-2 px-4 py-3 bg-white shadow-lg">
        <View className="flex-row space-x-3 items-center">
            <TouchableOpacity className="border border-[#cccccc] rounded-sm p-[1px]" onPress={()=>handleMinusQte()} >
              <Ionicons name='remove-outline' size={20} color="black" />
            </TouchableOpacity>
            <Text className="font-bold text-lg">{quantity}</Text>
            <TouchableOpacity className="border border-[#cccccc] rounded-sm p-[1px]">
              <Ionicons name='add-outline' size={20} color="black" onPress={()=>handleAddQte()} />
            </TouchableOpacity>
        </View>
        <View className="flex-row space-x-2 items-center">
            <TouchableOpacity className="bg-[#e5302024] p-2 rounded-lg" onPress={()=>handleAddToWishlist()}>
                <Ionicons name='heart-outline' size={25} color="#E52F20" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#e5302024] p-2 rounded-lg" onPress={()=>handleAddToCart()}>
                <Ionicons name='cart-outline' size={25} color="#E52F20" />
            </TouchableOpacity>
            <TouchableOpacity  className="border-2 px-4 py-2 border-[#E52F20] bg-[#E52F20] rounded-lg" onPress={()=>navigation.navigate("mainTab",{screen:"cart"})}>
                <Text className="text-white">Buy Now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const ProductScreen = () => {
    const navigation = useNavigation()
    
    const product = {
        id: 1,
        name: "Iphone 15 Pro Max Natural, black titanium",
        image: mobile,  
        price: 700.51,
        oldPrice: 760.80,
        discount: "15% Off",
        rating: 4.5,
        available: true,
        capacityOptions: ["256-GB", "512-GB", "1TB", "2TB"],
        colorOptions: ["#2B3F6C", "#CDCDCD"],
      };
    const [order,setOrder] = useState({id:product.id,name:product.name,img:product.image })
    const [selectedCapacity, setSelectedCapacity] = useState(product.capacityOptions[0]); 
    const [selectedColor, setSelectedColor] = useState(product.colorOptions[0]); 
    const dispatch = useDispatch();
    const handleAddToWishlist = () => {
        dispatch(addToWishlist(product));
      };

    const handleselectedCapacity = (option) => {
        setSelectedCapacity(option);
        
        
        
    };

    let selectedCapacityStyle = {
        backgroundColor:"#E52F20",
        color: "white",
    }

    const [quantity,setQuantity]= useState(1)

    const handleAddQte = ()=>{
        setQuantity(quantity+1)
    }
    const handleMinusQte = ()=>{
        quantity > 1 ? setQuantity(quantity-1) : null
    }

    

    return (
    <View className="bg-[#ededef] flex-1">
      <StatusBar  />
      <SafeAreaView className="flex-1">
        
        <ScrollView className=" flex-1" showsVerticalScrollIndicator={false}>
            <View className="py-5">
                <View className="flex-row h-[460px]">
                    <View className="w-16 items-center">
                        <TouchableOpacity  onPress={()=>navigation.goBack()}>
                            <Ionicons name='chevron-back-outline'  size={25} color="#161515" />
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 ">
                        <Image source={mobile} className="h-full w-full "/>
                    </View>
                </View>
            </View>
            <View className="bg-white shadow p-3 rounded-tr-[15px] rounded-tl-[15px] space-y-1  flex-1">
                <View className='bg-[#ededef8b] px-2 py-2 rounded-lg '>
                    <Text className="text-base font-bold text-[#1a1a1ace]">Iphone 15 pro max Natural, black titanium</Text>
                    <View className="py-2 flex-row">
                        <Ionicons name='star' size={17} color='#FDC040' />
                        <Ionicons name='star' size={17} color='#FDC040' />
                        <Ionicons name='star' size={17} color='#FDC040' />
                        <Ionicons name='star' size={17} color='#FDC040' />
                        <Ionicons name='star' size={17} color='#CDCDCD' />
                    </View>
                    <View className="flex-row mb-4 justify-between items-center">
                        <View className="flex-row items-center gap-1">
                            <Text className="text-[16px] text-[#E52F20] font-bold">$700.51</Text>
                            <Text className="text-[9px] text-[#CDCDCD] font-bold">$760.80</Text>
                        </View>
                        <View className="">
                            <Text className="text-[12px] bg-[#E52F20] text-white font-bold px-1 rounded-[2px]">15% Off</Text>
                            
                        </View>
                    </View>
                    <View className="flex-row items-center  gap-1">
                        <Text className="text-[12px] text-[#E52F20] font-bold">$650.51</Text>
                        <Text className="text-[10px] text-[#CDCDCD] font-bold">Above 5 units </Text>
                    </View>
                    <ScrollView horizontal={true} className="space-x-2 pt-3">
                        <View className="h-[60px] w-[60px] border border-gray-300 rounded-lg">
                            <Image source={mobile} className="h-full w-full "/>
                        </View>
                        <View className="h-[60px] w-[60px] border border-gray-300 rounded-lg">
                            <Image source={mobile} className="h-full w-full "/>
                        </View>
                        <View className="h-[60px] w-[60px] border border-gray-300 rounded-lg">
                            <Image source={mobile} className="h-full w-full "/>
                        </View>
                        <View className="h-[60px] w-[60px] border border-gray-300 rounded-lg">
                            <Image source={mobile} className="h-full w-full "/>
                        </View>
                        <View className="h-[60px] w-[60px] border border-gray-300 rounded-lg">
                            <Image source={mobile} className="h-full w-full "/>
                        </View>
                        <View className="h-[60px] w-[60px] border border-gray-300 rounded-lg">
                            <Image source={mobile} className="h-full w-full "/>
                        </View>
                    </ScrollView>
                </View>
                <View className='bg-[#ededef8b] px-2 py-2 rounded-lg  '>
                    <Text className="text-base font-bold mb-1 text-[#1a1a1ace]">Details</Text>
                    <View className="space-y-2">
                        <Text className="text-sm font-semibold text-[#0DBC00]">Available</Text>
                        <View className="space-y-2">
                            <View className="flex-row space-x-4 items-center">
                                <Text className="text-sm font-semibold text-[#1a1a1ace]">Capacity</Text>
                                <View className="flex-row space-x-2">
                                    <TouchableOpacity onPress={()=>setSelectedCapacity("256-GB")}>
                                        <Text
                                            style={
                                                selectedCapacity === "256-GB" ? selectedCapacityStyle : {}
                                            }
                                            className="py-1 px-2 text-[10px] border border-gray-300 text-[#1a1a1ace] rounded-lg"
                                            >
                                            256 GB
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>setSelectedCapacity("512-GB")}>
                                        <Text
                                            style={
                                                selectedCapacity === "512-GB" ? selectedCapacityStyle : {}
                                            }
                                            className="py-1 px-2 text-[10px] border border-gray-300 text-[#1a1a1ace] rounded-lg"
                                            >
                                            512 GB
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>setSelectedCapacity("1TB")}>
                                        <Text
                                            style={
                                                selectedCapacity === "1TB" ? selectedCapacityStyle : {}
                                            }
                                            className="py-1 px-2 text-[10px] border border-gray-300 text-[#1a1a1ace] rounded-lg"
                                            >
                                            1 TB
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>setSelectedCapacity("2TB")}>
                                        <Text
                                            style={
                                                selectedCapacity === "2TB" ? selectedCapacityStyle : {}
                                            }
                                            className="py-1 px-2 text-[10px] border border-gray-300 text-[#1a1a1ace] rounded-lg"
                                            >
                                            2TB
                                        </Text>
                                    </TouchableOpacity>
                                    

                                </View>
                            </View>
                            <View className="flex-row space-x-4 items-center">
                                <Text className="text-sm font-semibold text-[#1a1a1ace]">Color</Text>
                                <View className="flex-row space-x-2">
                                    <TouchableOpacity  onPress={()=>setSelectedColor("#2B3F6C")} >
                                        <View className="h-6 w-6  bg-[#2B3F6C] rounded-sm"></View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>setSelectedColor("#CDCDCD")}>
                                        <View className="h-6 w-6  bg-[#CDCDCD] rounded-sm"></View>
                                    </TouchableOpacity>

                                </View>
                            </View>
                            
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        <ProductBottomTab dispatch={dispatch} order={order} handleAddToWishlist={handleAddToWishlist} navigation={navigation} quantity={quantity} handleAddQte={handleAddQte} handleMinusQte={handleMinusQte}/>
      </SafeAreaView>
      
    </View>
  )
}

export default ProductScreen