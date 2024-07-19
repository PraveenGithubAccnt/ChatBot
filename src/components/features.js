import {View, Text, Image} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Features() {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-bold text-gray-900">
        Features
      </Text>
      <View className="bg-blue-400 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/chtgpticon.png')}
            style={{height: wp(6), width: wp(6)}}
          />
          <Text style={{fontSize: wp(4.8)}} className="font-bold text-gray-800">
            ChatGPT
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          I am ChatGPT, an AI to assist you with answering questions and
          providing text-based support.
        </Text>
      </View>
      <View className="bg-green-400 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/delleicon.png')}
            style={{height: wp(6), width: wp(6)}}
          />
          <Text style={{fontSize: wp(4.8)}} className="font-bold text-gray-800">
            DALL-E
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          I am DALL-E, an AI for generating high-quality images from text descriptions
        </Text>
      </View>
      <View className="bg-red-300 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require('../../assets/images/Aiicon.png')}
            style={{height: wp(6), width: wp(6)}}
          />
          <Text style={{fontSize: wp(4.8)}} className="font-bold text-gray-800">
            Smart AI
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="text-gray-700 font-medium">
          I am Smart AI, an AI that combines the text 
          generation capabilities of ChatGPT with the image creation abilities of DALL-E.
        </Text>
      </View>
    </View>
  );
}
