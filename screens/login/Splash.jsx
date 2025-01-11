import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SplashComponent from '../../components/login/SplashComponent'
export default function Splash() {
  return (
    <SplashComponent/>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    }
})