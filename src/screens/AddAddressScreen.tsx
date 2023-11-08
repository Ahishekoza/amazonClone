import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { ChevronRightIcon } from 'react-native-heroicons/outline'
import { addresses } from '../AddressData'

const AddAddressScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Header />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: 600, color: 'black' }}>Your Addresses</Text>
        <Pressable
          onPress={() => navigation.navigate('Address')}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 7,
            paddingHorizontal: 5,
          }}>
          <Text style={{ fontSize: 17, fontWeight: 600 }}>Add a new Address</Text>
          <ChevronRightIcon size={24} color={'black'} />
        </Pressable>

        <View>
          {addresses?.map((item, index) => {
            return (
              <Pressable
              key={index}
                style={{
                  borderWidth: 1,
                  borderColor: "#D0D0D0",
                  padding: 10,
                  flexDirection: "column",
                  gap: 5,
                  marginVertical: 10,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
                >
                  <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                    {item?.name}
                  </Text>
                </View>

                <Text style={{ fontSize: 15, color: "#181818" }}>
                  {item?.houseNo}, {item?.landmark}
                </Text>

                <Text style={{ fontSize: 15, color: "#181818" }}>
                  {item?.street}
                </Text>

                <Text style={{ fontSize: 15, color: "#181818" }}>
                  India, Bangalore
                </Text>

                <Text style={{ fontSize: 15, color: "#181818" }}>
                  phone No : {item?.mobileNo}
                </Text>
                <Text style={{ fontSize: 15, color: "#181818" }}>
                  pin code : {item?.postalCode}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 10,
                    marginTop: 7,
                  }}
                >
                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Edit</Text>
                  </Pressable>

                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Remove</Text>
                  </Pressable>

                  <Pressable
                    style={{
                      backgroundColor: "#F5F5F5",
                      paddingHorizontal: 10,
                      paddingVertical: 6,
                      borderRadius: 5,
                      borderWidth: 0.9,
                      borderColor: "#D0D0D0",
                    }}
                  >
                    <Text>Set as Default</Text>
                  </Pressable>
                </View>
              </Pressable>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

export default AddAddressScreen

const styles = StyleSheet.create({})