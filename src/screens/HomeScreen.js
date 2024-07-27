import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Voice from '@react-native-voice/voice';
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/features';
import { dummyMessages } from '../constants';

export default function HomeScreen() {
  const [messages, setMessages] = useState(dummyMessages);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  useEffect(() => {
    const onSpeechStart = () => {
      console.log('speech start handler');
    };
    const onSpeechEnd = () => {
      setRecording(false);
      console.log('speech end handler');
    };
    const onSpeechResults = (e) => {
      console.log('Voice event:', e);
    };
    const onSpeechError = (e) => {
      console.log('Speech error handler:', e);
    };

    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechError = onSpeechError;

    return () => {
      Voice.removeAllListeners();
    };
  }, []);

  const startRecording = async () => {
    setRecording(true);
    try {
      await Voice.start('en-US');
    } catch (error) {
      console.log('error:', error);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
      setRecording(false);
    } catch (error) {
      console.log('error:', error);
    }
  };

  const clear = () => {
    setMessages([]);
  };

  const stopSpeaking = () => {
    setSpeaking(false);
  };

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image
            source={require('../../assets/images/botcon.png')}
            style={{ width: wp(50), height: wp(50) }}
          />
        </View>
        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text style={{ fontSize: wp(5) }} className="text-gray-700 font-bold ml-1">
              Assistant
            </Text>
            <View style={{ height: hp(58) }} className="bg-neutral-200 rounded-3xl p-4">
              <ScrollView bounces={false} className="space-y-4" showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.content.includes('https')) {
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex bg-green-200 rounded-2xl rounded-tl-none">
                            <Image
                              key={index}
                              source={{ uri: message.content }}
                              className="rounded-2xl"
                              resizeMode="contain"
                              style={{ height: wp(60), width: wp(60) }}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View key={index} style={{ width: wp(70) }} className="bg-green-300 rounded-xl p-2 rounded-tl-none">
                          <Text className="font-bold text-green-800">
                            {message.content}
                          </Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View style={{ width: wp(70) }} className="bg-blue-300 rounded-xl p-2 rounded-tr-none">
                          <Text className="font-bold text-blue-800">
                            {message.content}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        <View className="flex justify-center items-center">
          {recording ? (
            <TouchableOpacity onPress={stopRecording}>
              <Image
                className="rounded-full"
                source={require('../../assets/images/voiceload.gif')}
                style={{ width: hp(8), height: hp(8) }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={startRecording}>
              <Image
                className="rounded-full"
                source={require('../../assets/images/recordingicn.png')}
                style={{ width: hp(8), height: hp(8) }}
              />
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity
              style={{
                backgroundColor: 'rgb(107, 114, 128)',
                borderRadius: 25,
                padding: 10,
                position: 'absolute',
                right: 40,
              }}
              onPress={clear}
            >
              <Text className="text-white font-bold">Clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity
              style={{
                backgroundColor: 'rgb(255, 0, 0)',
                borderRadius: 25,
                padding: 10,
                position: 'absolute',
                left: 40,
              }}
              onPress={stopSpeaking}
            >
              <Text className="text-white font-bold">Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
