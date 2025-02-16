import { View, Text ,Image, TextInput,Pressable ,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import logo from "../../../assets/images/logo.png"
import fb from '../../../assets/images/fb.png'
import google from '../../../assets/images/google.png'
import pome from '../../../assets/images/pome.png'

import { useDispatch,useSelector } from 'react-redux';

export default function SignUpScreen({navigation}) {
    const [username,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    

    const dispatch = useDispatch()
    const status = useSelector((state) => state.auth.status.register);
    const error = useSelector((state) => state.auth.error.register);

    const handleRegister = ()=>{
        dispatch(register({username,email,password}))
    }

  return (
    <View className="bg-white flex-1">
      <SafeAreaView className="px-4 flex-1">
        <View className="flex-row justify-center mt-10">
            <Image source={logo} className="w-[140px] h-[40px]"  />
        </View>
        <View className="flex-row justify-center mt-10 space-x-6 ">
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("signUp")}>
                    <Text className="text-base font-bold text-[#1A1A1A]" >
                        Sign up
                    </Text>
                    <View className="w-full h-[2px] mt-2 bg-orange-500"></View>
                </TouchableOpacity>
                
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("signIn")}>
                    <Text className="text-base font-bold text-[#7c7b7b]" >
                        Sign in
                    </Text>
                    
                </TouchableOpacity>
                
            </View>
            
        </View>
        <View className="form flex-col mt-10 space-y-4">
            <View>
                <TextInput className="w-full border border-[#E5E5E5] rounded-[10px] px-2 py-1" placeholder='Username' value={username}  onChangeText={(t)=>setUsername(t)} />
            </View>
            <View>
                <TextInput className="w-full border border-[#E5E5E5] rounded-[10px] px-2 py-1" placeholder='Email/phone number' value={email} onChangeText={(t)=>setEmail(t)} />
            </View>
            <View>
                <TextInput className="w-full border border-[#E5E5E5] rounded-[10px] px-2 py-1" secureTextEntry placeholder='Password' value={password} onChangeText={(t)=>setPassword(t)} />
            </View>
            <View className="flex-row items-center">
                <BouncyCheckbox
                    size={18} 
                    fillColor="#E52F20" 
                    unFillColor="#f8d4d1" 
                    iconStyle={{ borderColor: "#f8d4d1" }} 
                    innerIconStyle={{ borderWidth: 2, borderColor:"#e5302052" }}
                    aria-labelledby='policy'                    
                    textStyle={{  }} 
                    onPress={(isChecked) => {
                    alert(isChecked)
                }}/>
                <Text className="text-[#7E7E7E] text-[12px] ml-[-8px] ">I agree to terms & Policy.</Text>
                
            </View>
            <View className="mt-4">
                <TouchableOpacity className="bg-[#E52F20] rounded-[10px] py-2 mt-3" onPress={()=>handleRegister()} >
                    <Text className="text-center text-white font-bold">Create account</Text>
                </TouchableOpacity>
                {error && <Text>Error: {error}</Text>}   
                
                <Text>{status}</Text> 
            </View>
            <View className="mt-4">
                <Text className="text-center text-[#9B9B9B]">-------- Or--------</Text>  
                <View className="flex-row justify-center items-center space-x-3 mt-4">
                    <Image className="h-[32px] w-[32px]" source={fb}/>
                    <Image className="h-[32px] w-[32px]" source={google}/>
                    <Image className="h-[32px] w-[32px]" source={pome}/>
                </View> 
            </View>

        </View>
      </SafeAreaView>
    </View>
  )
}