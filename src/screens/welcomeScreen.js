import { View, Text, Image, TouchableOpacity,ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
export default function WelcomeScreen() {
  const navigation=useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
      <Text style={{fontSize: wp(10)}} className="text-center font-bold text-gray-700">Companion "JARVIS"</Text>
      <Text style={{fontSize: wp(4)}} className="text-center font-bold text-gray-650">The Future Is Here, Powered By AI.</Text>
      </View>
      <View className="flex-row justify-center">
      <Image 
        source={require('../../assets/images/welcom.png')}
        style={{ width: wp(75), height: wp(75), justifyContent: 'center', alignItems: 'center' }}
      ></Image>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}  className="bg-blue-700 mx-5 p-4 rounded-2xl">
        <Text style={{fontSize: wp(6)}} className="text-white text-center font-bold">Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}