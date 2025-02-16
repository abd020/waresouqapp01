import { View, Text,StyleSheet,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from "../assets/images/logo.png"
import onboarding1 from "../assets/images/onboarding1.png"
import onboarding2 from "../assets/images/onboarding2.png"
import onboarding3 from "../assets/images/onboarding3.png"
import { useNavigation } from '@react-navigation/native'

const OnboardingScreen = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView className="flex-1 px-4">
        <View className="flex-1">
            <Swiper
              loop={false}
              dotStyle={styles.dotStyle}
              activeDotStyle={styles.activeDotStyle}
              paginationStyle={styles.paginationStyle}
            >
                <View>
                <View className="flex-row justify-center mt-10">
                    <Image source={logo} className="w-[140px] h-[40px]"  />
                </View>
                <View>
                    <View className="flex-row justify-center mt-5 bg-red-300 rounded-md">
                        <Image source={onboarding1} className="w-full object-cover h-[340px]"/>
                    </View>
                    <View>
                        <Text className="font-bold text-2xl">
                            Wholesale or semibulk purchase
                        </Text>
                        <Text className="py-2">
                            Discover a diverse range of wholesale and semi-wholesale products in different categories. 
                            Our platform offers a unique solution to businesses looking for quality products at competitive prices.
                        </Text>
                    </View>
                </View>

                </View>
                <View className="px-2">
                    <View className="flex-row justify-center mt-10">
                        <Image source={logo} className="w-[140px] h-[40px]"  />
                    </View>
                    <View>
                    <View className="flex-row justify-center mt-5 bg-red-300 rounded-md">
                        <Image source={onboarding2} className="w-full object-cover h-[340px]"/>
                    </View>
                    <View>
                        <Text className="font-bold text-2xl">
                        Free delivery throughout Morocco
                        </Text>
                        <Text className="py-2">
                        Enjoy the convenience of free delivery on all orders across Morocco. We prioritize your satisfaction 
                        by eliminating delivery charges, ensuring that your shopping experience seamless, cost-effective.
                        </Text>
                    </View>
                </View>

                </View>
                <View>
                <View className="flex-row justify-center mt-10">
                    <Image source={logo} className="w-[140px] h-[40px]"  />
                </View>
                <View>
                    <View className="flex-row justify-center mt-5 bg-red-300 rounded-md">
                        <Image source={onboarding3} className="w-full object-cover h-[340px]"/>
                    </View>
                    <View>
                        <Text className="font-bold text-2xl">
                        Special Market Offers
                        </Text>
                        <Text className="py-2">
                        Discover a diverse range of wholesale and semi-wholesale products in different categories. 
                        Our platform offers a unique solution to businesses looking for quality products at competitive prices.
                        </Text>
                    </View>
                </View>

                </View>
            </Swiper>
            <View className="h-16">
                <View className="flex-row space-x-2">
                    <TouchableOpacity className="flex-1 border-2 py-2 border-[#E52F20] rounded-lg" onPress={()=>navigation.navigate("signUp")}>
                        <Text className="text-center text-[15px] font-semibold text-[#E52F20]">Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 border-2 py-2 border-[#E52F20] bg-[#E52F20] rounded-lg" onPress={()=>navigation.navigate("signIn")}>
                        <Text className="text-center text-[15px] font-semibold text-white">Sign in </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    
    dotStyle: {
      backgroundColor: 'rgba(0,0,0,.2)',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginHorizontal: 3,
      marginVertical: 3,
    },
    activeDotStyle: {
      backgroundColor: '#E52F20',
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 3,
      marginVertical: 3,
    },
    paginationStyle : {
        bottom : 13
    }
  });

export default OnboardingScreen