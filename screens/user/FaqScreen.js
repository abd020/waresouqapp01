import { View, Text,TouchableOpacity,ScrollView,TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
const FaqScreen = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style='dark'/>
      <TouchableOpacity className="p-3 absolute z-40 top-8 left-0" onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-outline' size={25} color="#b7b6b6" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false} className="px-4 mt-[70px]">
        <Text className="text-xl font-bold">FAQ</Text>
        <View className="py-2">
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


        <View className="faqs mt-4 space-y-2">
          <View className="px-3 py-2 flex-row border-[2px] rounded-lg border-[#e52f20]  justify-between items-center">
            <Text className="font-bold">Quels modes de paiement acceptez-vous?</Text>
            <TouchableOpacity>
              <Ionicons name='add' size={25} color="#e52f20" />
            </TouchableOpacity>
          </View>
          <View className="px-3 py-2 flex-row border-[2px] rounded-lg border-[#e52f20]  justify-between items-center">
            <Text className="font-bold">Quels modes de paiement acceptez-vous?</Text>
            <TouchableOpacity>
              <Ionicons name='add' size={25} color="#e52f20" />
            </TouchableOpacity>
          </View>
          <View className="px-3 py-2 flex-row border-[2px] rounded-lg border-[#e52f20]  justify-between items-center">
            <Text className="font-bold">Quels modes de paiement acceptez-vous?</Text>
            <TouchableOpacity>
              <Ionicons name='add' size={25} color="#e52f20" />
            </TouchableOpacity>
          </View>
          <View className="px-3 py-2 flex-row border-[2px] rounded-lg border-[#e52f20]  justify-between items-center">
            <Text className="font-bold">Quels modes de paiement acceptez-vous?</Text>
            <TouchableOpacity>
              <Ionicons name='add' size={25} color="#e52f20" />
            </TouchableOpacity>
          </View>
          <View className="px-3 py-2 flex-row border-[2px] rounded-lg border-[#e52f20]  justify-between items-center">
            <Text className="font-bold">Quels modes de paiement acceptez-vous?</Text>
            <TouchableOpacity>
              <Ionicons name='add' size={25} color="#e52f20" />
            </TouchableOpacity>
          </View>
        </View>
        
        
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default FaqScreen