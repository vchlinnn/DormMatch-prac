import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';
import axios from 'axios';
import SwipeableImage from './components/SwipeableImage';
import Swipes from './components/Swipes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=5000');
      setUsers(data.results);
      console.log("get data"); 
    } catch (error) {
      console.log(error);
      Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }]);
    }
  }  

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 0 ? (
          <Swipes currentIndex={currentIndex} users={users}></Swipes>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </GestureHandlerRootView>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
  },
});
