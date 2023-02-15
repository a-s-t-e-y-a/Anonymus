import {
    TouchableOpacity,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import React from 'react';
  
  export default function App() {
    const handleKeyPress = ({nativeEvent: {key: keyValue}}) => {
      console.log(keyValue);
      if (keyValue === 'Enter') {
        console.log('enter');
      }
    };
    return (
      <View style={styles.container}>
        <View>
          <View className="mb-12">
            <Text className="font-bold text-left text-black text-xl">
              Who we are !!
              <Text className="text-red-700"> click to know more about us</Text>
            </Text>
          </View>
          <View className="mb-12">
            <Text className="font-bold text-left text-black text-7xl">
              Enter phone number to get started ...!
            </Text>
          </View>
          <View>
            <TextInput
              keyboardType="numeric"
              onKeyPress={handleKeyPress}
              placeholder="Enter phone number to get started"
              className="text-lg w-96 px-4 rounded-lg border-2 mb-12"></TextInput>
            <TouchableOpacity
              className=" flex items-center justify-center bg-black rounded-lg"
              style={{height: 60, marginTop: 10, width: 200}}>
              <Text className="text-white text-2xl font-bold text-center">
                Let's move  in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'AmaticSC-Bold',
      color: '#fcba03',
    },
  });
  