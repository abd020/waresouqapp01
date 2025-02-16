import { View, Text, TouchableOpacity,ScrollView,StyleSheet, TextInput} from 'react-native'
import React, { useCallback, useMemo, useRef,useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import Product from '../../components/Product';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CheckBox } from '@rneui/themed';
import { Rating } from 'react-native-ratings';



import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';



const CategoriesScreen = ({navigation}) => {

  
  const [isModalVisible, setModalVisible] = useState(false);
  
  // ===========  Modal  =======
  
  const bottomSheetModalRef = useRef(null);  
  const snapPoints = useMemo(() => ['25%', '50%',"60%","70%","80"], []); 
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    setModalVisible(true);
  }, []);

  const handleSheetChanges = useCallback((index) => {
    
  }, []);

  const handleCloseModal=()=>{
    setModalVisible(false);
  }

  // ========  rating =======

  const [rating, setRating] = useState(5);

  const handleRating = (value) => {
    setRating(value);
    
  };

  // ========= sorting  ======

  const [sortBy,setSortBy] = useState("match")
  // ========= brands  ======

  const [brands,setBrands] = useState([])
  const handleCheckBrand =(brand)=>{
    setBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((ele) => ele !== brand)
        : [...prevBrands, brand]
    );
  }
  // ========= categorie  ======

  const [categorie,setCategorie] = useState("all")
  
  
  return (
    <SafeAreaView className="flex-1  bg-white  relative">
      <StatusBar style='dark'/>
      
      <GestureHandlerRootView className="py-2">
      <BottomSheetModalProvider>
      <TouchableOpacity className="px-3 absolute z-40 top-5 left-0" onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-outline' size={25} color="#b7b6b6" />
      </TouchableOpacity>
        
        <ScrollView showsVerticalScrollIndicator={false} className="px-4 mt-16 space-y-4">
          <View className="flex-row items-center justify-between">
            <Text className="font-bold text-lg">Categories</Text>
            <TouchableOpacity onPress={()=>handlePresentModalPress()}>
              <Ionicons name='options-outline' size={28} color="black" />
            </TouchableOpacity>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              onDismiss={handleCloseModal}
              style={styles.bottomSheetModal}
            >
              <BottomSheetView >
                <View className="px-4 space-y-6 ">
                  <View>
                    <Text className="text-center font-bold text-[14px]">Filters</Text>
                  </View>
                  <View className="space-y-2">
                    <Text>Sort by :</Text>
                    <View className="flex-row space-x-2 items-center">
                      <TouchableOpacity className={`border-2 rounded-md px-3 py-1 border-${sortBy == "match" ? "[#E52F20]":"[#b7b6b693]"}`} onPress={()=>setSortBy("match")}>
                        <Text className={`${sortBy == "match" ? "text-[#E52F20]":"text-black"}`}>Best match</Text>
                      </TouchableOpacity >
                      <TouchableOpacity className={`border-2 rounded-md px-3 py-1 border-${sortBy == "orders" ? "[#E52F20]":"[#b7b6b693]"}`} onPress={()=>setSortBy("orders")}>
                        <Text className={`${sortBy == "orders" ? "text-[#E52F20]":"text-black"}`}>Orders</Text>
                      </TouchableOpacity>
                      <TouchableOpacity className={`border-2 rounded-md px-3 py-1 border-${sortBy == "price" ? "[#E52F20]":"[#b7b6b693]"}`} onPress={()=>setSortBy("price")}>
                        <Text className={`${sortBy == "price" ? "text-[#E52F20]":"text-black"}`}>Price</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View className="space-y-2">
                    <Text>Brands :</Text>
                    <View className="flex-row ">
                      <CheckBox
                        checked={brands.includes("Oppo")}
                        onPress={()=>handleCheckBrand("Oppo")}
                        title="Oppo"
                        containerStyle={{ width:"19%", padding: '0px', marginTop: '0px', transform: [{ translateX: -17 }] }}
                        iconType="material-community"
                        checkedIcon="checkbox-marked"
                        uncheckedIcon="checkbox-blank-outline"
                        checkedColor="red"
                        textStyle={{ fontWeight: 500 , fontSize:12,padding:0 }}
                      />
                      <CheckBox
                        checked={brands.includes("Xiaomi")}
                        onPress={()=>handleCheckBrand("Xiaomi")}
                        title="Xiaomi"
                        containerStyle={{ width:"19%", padding: '0px', marginTop: '0px', transform: [{ translateX: -17 }] }}
                        iconType="material-community"
                        checkedIcon="checkbox-marked"
                        uncheckedIcon="checkbox-blank-outline"
                        checkedColor="red"
                        textStyle={{ fontWeight: 500 , fontSize:12 ,padding:0 }}
                      />
                      <CheckBox
                        checked={brands.includes("Samsung")}
                        onPress={()=>handleCheckBrand("Samsung")}
                        title="Samsung"
                        containerStyle={{ width:"26%", padding: '0px', marginTop: '0px', transform: [{ translateX: -17 }] }}
                        iconType="material-community"
                        checkedIcon="checkbox-marked"
                        uncheckedIcon="checkbox-blank-outline"
                        checkedColor="red"
                        textStyle={{ fontWeight: 500 , fontSize:12,padding:0 }}
                      />
                      <CheckBox
                        checked={brands.includes("Apple")}
                        onPress={()=>handleCheckBrand("Apple")}
                        title="Apple"
                        containerStyle={{width:"19%",  padding: '0px', marginTop: '0px', transform: [{ translateX: -17 }] }}
                        iconType="material-community"
                        checkedIcon="checkbox-marked"
                        uncheckedIcon="checkbox-blank-outline"
                        checkedColor="red"
                        textStyle={{ fontWeight: 500 , fontSize:12,padding:0 }}
                      />
                    </View>
                  </View>
                  <View className="space-y-2 ">
                    <Text>Price :</Text>
                    <View className="flex-row ">
                      <View className="flex-row  space-x-2 items-center px-3">
                        <Text className="text-[#b7b6b6b6]">Min</Text>
                        <View className="flex-row px-2 space-x-2 border-2 border-[#b7b6b693]">
                          <Text className="text-lg me-2">$</Text>
                          <TextInput keyboardType="numeric" maxLength={5} className="w-16 " />
                        </View>
                      </View>
                      <View className="flex-row  space-x-2 items-center px-3">
                        <Text className="text-[#b7b6b6b6]">Max</Text>
                        <View className="flex-row px-2 space-x-2  border-2 border-[#b7b6b693]">
                          <Text className="text-lg me-2">$</Text>
                          <TextInput keyboardType="numeric" maxLength={5}  className="w-16"/>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View className="space-y-4 my-4">
                    <Text>Reviews :</Text>
                    <Rating
                      type="star"
                      ratingCount={5}
                      startingValue={5}
                      imageSize={24}
                      onFinishRating={handleRating}
                      style={{marginRight:"auto"}}
                    />
                  </View>
                </View>
              </BottomSheetView>
            </BottomSheetModal>
          </View>

          <ScrollView className="space-x-2" horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity className={`flex-row space-x-2 border-[1px] border-${categorie=="all"?"[#e52f20]":"[#b7b6b693]"} rounded-lg px-3 py-2`}
            onPress={()=>setCategorie("all")}
            >
              <Ionicons name='grid-outline' size={20} color="#e52f20" />
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity className={`flex-row space-x-2 border-[1px] border-${categorie=="women-fashion"?"[#e52f20]":"[#b7b6b693]"} rounded-lg px-3 py-2`}
            onPress={()=>setCategorie("women-fashion")}
            >
              <Ionicons name='grid-outline' size={20} color="#e52f20" />
              <Text>Women’s Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity className={`flex-row space-x-2 border-[1px] border-${categorie=="men-fashion"?"[#e52f20]":"[#b7b6b693]"} rounded-lg px-3 py-2`}
            onPress={()=>setCategorie("men-fashion")}
            >
              <Ionicons name='grid-outline' size={20} color="#e52f20" />
              <Text>Men's Fashion</Text>
            </TouchableOpacity>
          </ScrollView>



          <View className="flex-row justify-between  flex-wrap  ">
            <Product navigation={navigation}/>
            <Product navigation={navigation}/>
            <Product navigation={navigation}/>
            <Product navigation={navigation}/>
            <Product navigation={navigation}/>
            <Product navigation={navigation}/>
          </View>


          
          
        </ScrollView>
        {isModalVisible && (
        <View className="absolute top-0 w-full bottom-0 z-0 bg-gray-800 opacity-50 "></View>
      )}
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bottomSheetModal: {
    zIndex: 90 
  }
})

export default CategoriesScreen