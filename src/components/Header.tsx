import { StyleSheet, Text, View,Pressable,TextInput } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, MicrophoneIcon } from 'react-native-heroicons/outline'


const Header = () => {
  return (
    <View style={{ backgroundColor: '#00CED1', padding: 10, flexDirection: 'row', alignItems: 'center' }}>
    <Pressable style={{ marginHorizontal: 7, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', gap: 10, borderRadius: 3, flex: 1 }}>
        <MagnifyingGlassIcon style={{ marginLeft: 10 }} size={24} color={'black'} />
        <TextInput placeholder='Search Amazon.in' />
    </Pressable>
    <MicrophoneIcon size={24} color={'black'} />
</View>
  )
}

export default Header

const styles = StyleSheet.create({})