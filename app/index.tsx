import { Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import {  router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from "../constants/images";
import CustomButton from 'components/CustomButton';

const App = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{height: "100%"}}>
        <View className="w-full h-full items-center justify-center px-4">
          <Image 
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image 
            source={images.cards}
            className="max-w-[380px] max-h-[250px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="color-white font-bold text-center text-3xl">
              Discover Endless Possibilities with {""}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image 
              source={images.path} 
              className="absolute w-[136px] h-[15px] -bottom-3 -right-8"  
              resizeMode="contain"
            />
          </View>

          <Text className="mt-7 text-lg text-center text-gray-100">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>

            <CustomButton 
              title="Continue with Email"
              handlePress={() => router.push("/sign-in")}
              containerStyles="w-full mt-7"
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App;
