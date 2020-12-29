import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.header}>
      <Text style={styles.message}>Welcome to React Native</Text>
      <Text style={styles.information}>Hello Karthick!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  header : {
    marginTop : 200,
    marginLeft : 25
  },
  message : {
    fontSize : 28,
    color: 'red',
    fontWeight: 'bold'
  },
  information: {
    fontSize: 24,
    color: '#350f96'
  }
}) 

