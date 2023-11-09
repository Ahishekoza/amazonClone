import { StyleSheet, Text, View, ScrollView, Pressable, Alert } from 'react-native'
import React, { useDebugValue, useState } from 'react'
import { addresses } from '../AddressData';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircleIcon, ChevronLeftIcon, XCircleIcon } from 'react-native-heroicons/outline'
import { addressforDelivery, clearCart, foodOrdered } from '../reducer/CartReducer';

const ConfirmationScreen = ({ navigation }) => {
  const steps = [
    { title: "Address", content: "Address Form" },
    { title: "Delivery", content: "Delivery Options" },
    { title: "Payment", content: "Payment Details" },
    { title: "Place Order", content: "Order Summary" },
  ];
  const [currentStep, setCurrentStep] = useState(0)
  const [option, setOption] = useState(false);

  // In order Model we have payment Method , shipping Address , Products and user Details
  const [paymentMethod, setPaymentMethod] = useState('')
  // No need to create a state as we are already managing the Address on global level
  const defaultSelectedAddress = useSelector((state) => state.cart.deliveryAddress)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const orderedFood = useSelector((state) => state.cart.orderedFood)
  const totalPrice = cart?.map((item) => item.price * item.quantity).reduce((curr, prev) => curr + prev, 0)

  console.log(orderedFood)

  const handlePlaceOrder = () => {
    dispatch(foodOrdered(cart))
    dispatch(clearCart(cart))
    navigation.navigate('Order')
  }


  // install react-native-razorpay and use hear
  const pay = () => {
    dispatch(foodOrdered(cart))
    dispatch(clearCart(cart))
    navigation.navigate('Order')
  }

  const handlePaymentMethodForCredit = () => {
    setPaymentMethod('card')


    Alert.alert("UPI/Debit card", "Pay Online", [
      {
        text: "Cancel",
        onPress: () => setPaymentMethod(''),
      },
      {
        text: "OK",
        onPress: () => pay(),
      },
    ]);

  }


  return (
    <ScrollView>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 10 }}>
        {
          steps.map((item, index) => {
            return (
              <View key={index} style={{ flexDirection: 'column', alignItems: 'center' }} >
                <View style={[{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#D0D0D0', justifyContent: 'center', alignItems: 'center' }, index === currentStep && { backgroundColor: 'green' }]}>
                  <Text style={[{ fontSize: 15 }, index === currentStep && { color: 'white' }]}>
                    {index + 1}
                  </Text>
                </View>
                <Text style={{ fontSize: 16, marginTop: 3 }}>{item?.title}</Text>
              </View>
            )
          })
        }
      </View>

      {
        currentStep === 0 &&
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Text style={{ fontSize: 19, fontWeight: 600 }}>Select Delivery Address</Text>

          <View style={{ marginVertical: 10 }}>
            {
              addresses?.map((item, index) => {
                return (
                  <View
                    style={{
                      borderWidth: 1,
                      borderColor: "#D0D0D0",
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: 10,
                      columnGap: 10
                    }}>
                    {
                      defaultSelectedAddress?.name === item.name ?
                        <CheckCircleIcon size={24} color={'#008397'} />
                        :
                        <XCircleIcon size={24} color={'black'} />
                    }

                    <View>
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

                      {

                        defaultSelectedAddress?.name === item.name ?
                          <></>
                          :
                          <Pressable onPress={() => dispatch(addressforDelivery(item))} style={{ margin: 10, backgroundColor: '#008397', padding: 10, borderRadius: 10 }}>
                            <Text style={{ textAlign: 'center', fontSize: 17, color: 'white' }}>Set to Delivery Address</Text>
                          </Pressable>

                      }

                    </View>
                  </View>
                )
              })
            }

            <Pressable onPress={() => setCurrentStep(1)} style={{ backgroundColor: '#FFC72C', marginTop: 10, padding: 10, borderRadius: 10 }}>
              <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}>Continue</Text>
            </Pressable >
          </View>
        </View>
      }
      {
        currentStep === 1 &&
        <>
          <Pressable onPress={() => setOption(!option)} style={{ marginHorizontal: 20, marginVertical: 20 }}>
            <Text style={{ fontSize: 19, fontWeight: 600 }}>Choose your delivery options</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                padding: 8,
                gap: 7,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                marginTop: 10,
              }}
            >
              {option ? (
                <CheckCircleIcon size={24} color="#008397" />
              ) : (
                <XCircleIcon
                  size={24}
                  color="gray"
                />
              )}

              <Text style={{ flex: 1, fontSize: 15, color: 'black' }}>
                <Text style={{ fontSize: 17, color: "green", fontWeight: "500" }}>
                  Tomorrow by 10pm
                </Text>{" "}
                - FREE delivery with your Prime membership
              </Text>
            </View>

          </Pressable>
          <Pressable onPress={() => setCurrentStep(2)} style={{ backgroundColor: '#FFC72C', margin: 20, padding: 10, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}>Continue</Text>
          </Pressable >
        </>
      }

      {
        currentStep === 2 &&

        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Text style={{ fontSize: 19, fontWeight: 600 }}>Select your payment Method</Text>
          <Pressable
            onPress={() => setPaymentMethod('cash')}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              gap: 7,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            {paymentMethod === 'cash' ? (
              <CheckCircleIcon size={30} color="#008397" />
            ) : (
              <XCircleIcon

                size={30}
                color="gray"
              />
            )}

            <Text style={{ flex: 1, fontSize: 20, color: 'black' }}>
              Cash on Delivery
            </Text>
          </Pressable>

          <Pressable
            onPress={handlePaymentMethodForCredit}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              gap: 7,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            {paymentMethod === 'card' ? (
              <CheckCircleIcon size={30} color="#008397" />
            ) : (
              <XCircleIcon
                size={30}
                color="gray"
              />
            )}

            <Text style={{ flex: 1, fontSize: 20, color: 'black' }}>
              UPI/Credit or Debit Card
            </Text>
          </Pressable>

          <Pressable onPress={() => setCurrentStep(3)} style={{ backgroundColor: '#FFC72C', marginTop: 10, padding: 10, borderRadius: 10 }}>
            <Text style={{ textAlign: 'center', fontSize: 16, color: 'black' }}>Continue</Text>
          </Pressable >
        </View>

      }

      {
        currentStep === 3 && paymentMethod === 'cash' &&
        <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order Now</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Save 5% and never run out
              </Text>
              <Text style={{ fontSize: 15, color: "gray", marginTop: 5 }}>
                Turn on auto deliveries
              </Text>
            </View>

            <ChevronLeftIcon
              size={24}
              color="black"
            />
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text>Shipping to {defaultSelectedAddress?.name}</Text>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                Items
              </Text>

              <Text style={{ color: "gray", fontSize: 16 }}>{cart.length}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "500", color: "gray" }}>
                Delivery
              </Text>

              <Text style={{ color: "gray", fontSize: 16 }}>₹{totalPrice}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 8,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Order Total
              </Text>

              <Text
                style={{ color: "#C60C30", fontSize: 17, fontWeight: "bold" }}
              >
                ₹{totalPrice}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "white",
              padding: 8,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 16, color: "gray" }}>Pay With</Text>

            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 7 }}>
              Pay on delivery (Cash)
            </Text>
          </View>

          <Pressable
            onPress={handlePlaceOrder}
            style={{
              backgroundColor: "#FFC72C",
              padding: 10,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 500 }}>Place your order</Text>
          </Pressable>
        </View>
      }

    </ScrollView>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})