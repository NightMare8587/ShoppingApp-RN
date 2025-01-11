import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitClick = async () => {

    }
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Shopping App</Text>
      <TextInput
      style={styles.inputFields}
      value={email}
      onChangeText={setEmail}
      placeholder='Enter your email' />

      <TextInput
      style={styles.inputFields}
      value={password}
      onChangeText={setPassword}
      placeholder='Enter your password' />

      <TouchableOpacity style={styles.buttonSurface} onPress={submitClick}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    inputFields: {
        marginStart: 20,
        marginEnd: 20,
        fontSize: 20,
        marginTop: 12,
        backgroundColor: '#eeede9',
        paddingHorizontal: 12,
        borderRadius: 14
    },
    header: {
        color: 'green',
        fontSize: 40,
        fontWeight: 800,
        textAlign: 'center',
        marginBottom: 20
    },
    buttonSurface: {
        marginTop: 25,
        alignSelf: 'center',
        backgroundColor: 'orange',
        borderRadius: 25,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 500,
        paddingHorizontal: 20,
        paddingVertical:10
    }
})