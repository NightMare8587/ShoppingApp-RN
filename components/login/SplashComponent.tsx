import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SplashComponent() {
  return (
    <View style={styles.container}>
      <Text>SplashComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
})