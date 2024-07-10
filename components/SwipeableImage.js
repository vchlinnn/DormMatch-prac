import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default function SwipeableImage({ user }) {
    return (
        <View>
            <Image source={{ uri: user.picture.large }} style ={styles.photo} />
        </View>
    )
}

const styles = Stylesheet.create({
    photo: {
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 20,
    },
})
