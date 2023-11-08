import { StyleSheet, Text, View, TextInput, ScrollView, Pressable } from 'react-native'
import React,{useState} from 'react'
import Header from '../components/Header'

const AddressScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  // TODO : Add Address to User Address take userId from async Storage and then use userId to change the address
  const handleAddAddress =()=>{
    navigation.goBack()
  }
  return (
    <ScrollView>
      <Header />
      <View style={{ padding: 10 }}>
        <View >
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Add New Address</Text>
          <TextInput  placeholder='India' placeholderTextColor={'black'} style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, fontSize: 16 }}></TextInput>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Full Name</Text>
          <TextInput value={name} onChangeText={(text)=>setName(text)} placeholder='Enter your name' placeholderTextColor={'black'} style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, fontSize: 16 }}></TextInput>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Mobile Number</Text>
          <TextInput  value={mobileNo} onChangeText={(text)=>setMobileNo(text)} placeholder='Enter your number' placeholderTextColor={'black'} style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, fontSize: 16 }}></TextInput>
        </View>

        <View style={{ marginVertical: 10 }} >
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Flat,House No,Building,Company</Text>
          <TextInput value={houseNo} onChangeText={(text)=>setHouseNo(text)} style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, fontSize: 16 }}></TextInput>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Area,Street,Sector</Text>
          <TextInput value={street} onChangeText={(text)=>setStreet(text)} placeholderTextColor={'black'} style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, fontSize: 16 }}></TextInput>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Landmark</Text>
          <TextInput value={landmark} onChangeText={(text)=>setLandmark(text)} style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, fontSize: 16 }}></TextInput>
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold' }}>Pincode</Text>
          <TextInput value={postalCode} onChangeText={(text)=>setPostalCode(text)} placeholder='Enter Pincode' style={{ borderColor: 'black', borderWidth: 1, marginTop: 10, fontSize: 16 }}></TextInput>
        </View>

        <Pressable onPress={handleAddAddress} style={{marginTop:20,backgroundColor:'#FFC72C',padding:10,borderRadius:10}}>
          <Text style={{textAlign:'center',fontSize:17,fontWeight:600}}>Add Address</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default AddressScreen

const styles = StyleSheet.create({})