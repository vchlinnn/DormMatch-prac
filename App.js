import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, Text } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';
import axios from 'axios';
import SwipeableImage from './components/SwipeableImage';

export default function App() {

  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchUsers() {
    try {
      const { data } = await axios.get('https://randomuser.me/api/?results=5000');
      setUsers(data.results);
      // console.log(data.results)
    } catch (error) {
      console.log(error);
      Alert.alert('Error getting users', '', [{ text: 'Retry', onPress: () => fetchUsers() }]);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 ? (
          <SwipeableImage user={users[currentIndex]} />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );
}

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
