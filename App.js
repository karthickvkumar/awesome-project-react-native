import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text>This is Header Portion</Text>
        </View>
        <View style={styles.content}>
          <Text>This is Content Portion</Text>
        </View>
        <View style={styles.footer}>
          <Text>This is Footer Portion</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1
  },
  header : {
    flex : 2,
    backgroundColor : 'red'
  },
  content : {
    flex : 8,
    backgroundColor: 'green'
  },
  footer : {
    flex: 1,
    backgroundColor: 'blue'
  }
}) 

