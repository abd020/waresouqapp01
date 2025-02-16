import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProductBottomTab = () => {
    const [quantity,setQuantity]= useState(1)
    const navigation  = useNavigation()

    const handleAddQte = ()=>{
        setQuantity(quantity+1)
    }
    const handleMinusQte = ()=>{
        quantity > 1 ? setQuantity(quantity-1) : null
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
            <TouchableOpacity className="bg-[#e5302024] p-2 rounded-lg">
                <Ionicons name='heart-outline' size={25} color="#E52F20" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#e5302024] p-2 rounded-lg">
                <Ionicons name='cart-outline' size={25} color="#E52F20" />
            </TouchableOpacity>
            <TouchableOpacity  className="border-2 px-4 py-2 border-[#E52F20] bg-[#E52F20] rounded-lg" onPress={()=>navigation.navigate("cart")}>
                <Text className="text-white">Buy Now</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ProductBottomTab