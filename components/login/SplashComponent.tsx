import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function SplashComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Shopping App</Text>
      <Text style={styles.subHeader}>Everything you need is here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    mainHeading: {
        textAlign: 'center',
        fontSize: 40,
        color: 'green',
        fontWeight: 800
    },
    subHeader: {
        marginTop: 10,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 400
    }
})