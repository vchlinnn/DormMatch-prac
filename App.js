import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants'
import TopBar from './components/TopBar'
import axios from 'axios'

export default function App() {

  const [users, setUsers] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  
  async function fetchUsers() {
    try {
      const {data} = await axios.get('https://randomuser.me/api/')
      setUsers(data.results)
      // console.log(data.results)
    } catch (error) {
      console.log(error)
      Alert.alert('Error getting users', '', [{text: 'Retry', onPress: () => fetchUsers()}])
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View style={styles.container}>
      <TopBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
});
